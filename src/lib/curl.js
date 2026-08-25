// Turns the `curl` snippet from a page's frontmatter into structured requests,
// so the console can show a URL bar, a headers table and a formatted body the
// way an API client does — instead of one opaque blob of shell text.

// Splits a value out of the token stream: `--header 'A: B'` → "A: B".
const VALUE_FLAGS =
  /^(-H|--header|-d|--data|--data-raw|--data-binary|--data-urlencode|-X|--request|--url|-u|--user|-A|--user-agent|-b|--cookie)$/;
const BODY_FLAGS = /^(-d|--data|--data-raw|--data-binary|--data-urlencode)$/;

// Shell-style tokenizer: quoted values keep their newlines (the JSON body of
// these snippets spans many lines), backslash line continuations are dropped.
function tokenize(text) {
  const re = /'([^']*)'|"((?:[^"\\]|\\.)*)"|\\\r?\n|(\s+)|(\S+)/g;
  const tokens = [];
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m[1] !== undefined) tokens.push(m[1]);
    else if (m[2] !== undefined) tokens.push(m[2]);
    else if (m[4] !== undefined && m[4] !== "\\") tokens.push(m[4]);
  }
  return tokens;
}

// Re-indents a JSON body to two spaces so every page reads the same, and
// leaves anything that is not JSON untouched.
function formatBody(raw) {
  const text = String(raw ?? "").trim();
  if (!text) return { text: "", json: false, minified: "" };
  try {
    const value = JSON.parse(text);
    return {
      text: JSON.stringify(value, null, 2),
      json: true,
      minified: JSON.stringify(value),
    };
  } catch {
    return { text, json: false, minified: text };
  }
}

// A JSON-RPC payload names itself — used as the request label when the snippet
// has no `# comment` heading above it.
function labelFromBody(text) {
  const m = text.match(/"method"\s*:\s*"([^"]+)"/);
  return m ? m[1] : "";
}

function buildRequest(tokens, name) {
  let method = "";
  let url = "";
  let body = "";
  const headers = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token === "curl") continue;

    if (VALUE_FLAGS.test(token)) {
      const value = tokens[++i] ?? "";
      if (token === "-X" || token === "--request") method = value;
      else if (token === "--url") url = value;
      else if (BODY_FLAGS.test(token)) body = value;
      else if (token === "-H" || token === "--header") {
        const at = value.indexOf(":");
        if (at > 0) {
          headers.push({
            key: value.slice(0, at).trim(),
            value: value.slice(at + 1).trim(),
          });
        }
      }
      continue;
    }

    // Valueless flags (`--location`, `-s`, `-k`) are skipped; the first bare
    // token left is the URL, which `--location` only precedes.
    if (token.startsWith("-")) continue;
    if (!url) url = token;
  }

  if (!url) return null;

  const formatted = formatBody(body);
  return {
    name: name || labelFromBody(formatted.text) || "Request",
    method: (method || (formatted.text ? "POST" : "GET")).toUpperCase(),
    url,
    headers,
    body: formatted.text,
    bodyIsJson: formatted.json,
    bodyMinified: formatted.minified,
  };
}

// Some pages document the call as plain HTTP (`POST <url>` followed by the
// JSON envelope) rather than as a curl command — parse that shape too.
function parseHttpSnippet(snippet) {
  const m = String(snippet ?? "")
    .trim()
    .match(/^(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)\s+(\S+)\s*([\s\S]*)$/i);
  if (!m) return [];

  const formatted = formatBody(m[3]);
  return [
    {
      name: labelFromBody(formatted.text) || "Request",
      method: m[1].toUpperCase(),
      url: m[2],
      headers: [],
      body: formatted.text,
      bodyIsJson: formatted.json,
      bodyMinified: formatted.minified,
    },
  ];
}

// A snippet can hold several invocations (`# 11.1 Sender info`, then a second
// one below); each becomes its own request, labelled by the comment above it.
export function parseCurl(snippet) {
  const lines = String(snippet ?? "").split(/\r?\n/);
  const chunks = [];
  let current = null;
  let name = "";
  let inQuotedValue = false;

  for (const line of lines) {
    if (!inQuotedValue) {
      if (/^\s*#/.test(line)) {
        name = line.replace(/^\s*#\s*/, "").trim();
        current = null;
        continue; // comments never open a quoted value
      }
      if (/^\s*curl(\s|$)/.test(line)) {
        current = { name, lines: [] };
        name = "";
        chunks.push(current);
      }
    }
    if (current) current.lines.push(line);
    if ((line.match(/'/g) ?? []).length % 2) inQuotedValue = !inQuotedValue;
  }

  const requests = chunks
    .map((chunk) => buildRequest(tokenize(chunk.lines.join("\n")), chunk.name))
    .filter(Boolean);

  return requests.length ? requests : parseHttpSnippet(snippet);
}
