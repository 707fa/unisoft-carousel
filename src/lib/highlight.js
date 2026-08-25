// A small, dependency-free tokenizer for the four languages the docs contain.
// Each rule is [type, sticky regex] and the first rule that matches at the
// cursor wins; anything unmatched accumulates as plain text.

const JSON_RULES = [
  ["key", /"(?:[^"\\]|\\.)*"(?=\s*:)/y],
  ["str", /"(?:[^"\\]|\\.)*"/y],
  ["lit", /\b(?:true|false|null)\b/y],
  ["num", /-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/y],
  ["punct", /[{}[\],:]/y],
];

const SHELL_RULES = [
  ["com", /#[^\n]*/y],
  ["str", /'[^']*'|"(?:[^"\\]|\\.)*"/y],
  ["punct", /\\(?=\r?\n)/y],
  ["kw", /\bcurl\b/y],
  ["flag", /--?[A-Za-z][\w-]*/y],
];

const JS_RULES = [
  ["com", /\/\/[^\n]*|\/\*[\s\S]*?\*\//y],
  ["str", /'[^'\n]*'|"[^"\n]*"|`(?:[^`\\]|\\.)*`/y],
  [
    "kw",
    /\b(?:await|async|const|let|var|function|return|new|if|else|for|of|in|typeof|import|from|export|try|catch|throw|class)\b/y,
  ],
  ["lit", /\b(?:true|false|null|undefined)\b/y],
  ["key", /[A-Za-z_$][\w$]*(?=\s*:)/y],
  ["num", /\b-?\d+(?:\.\d+)?\b/y],
  ["punct", /[{}[\]();,.]/y],
];

const PY_RULES = [
  ["com", /#[^\n]*/y],
  ["str", /'''[\s\S]*?'''|"""[\s\S]*?"""|b?'[^'\n]*'|b?"[^"\n]*"/y],
  [
    "kw",
    /\b(?:import|from|def|return|if|elif|else|for|in|while|with|as|class|try|except|raise|lambda|print)\b/y,
  ],
  ["lit", /\b(?:True|False|None)\b/y],
  ["num", /\b-?\d+(?:\.\d+)?\b/y],
  ["punct", /[{}[\]();,.:]/y],
];

const RULES = {
  json: JSON_RULES,
  shell: SHELL_RULES,
  curl: SHELL_RULES,
  bash: SHELL_RULES,
  js: JS_RULES,
  node: JS_RULES,
  python: PY_RULES,
};

// `{{host}}` placeholders are the one thing a reader must replace before the
// call runs, so they are pulled out of whatever token contains them.
const PLACEHOLDER = /(\{\{[^{}]+\}\})/g;

function pushValue(out, type, value) {
  if (!value) return;
  if (type === "com" || !value.includes("{{")) {
    out.push({ type, value });
    return;
  }
  for (const part of value.split(PLACEHOLDER)) {
    if (!part) continue;
    out.push({ type: PLACEHOLDER.test(part) ? "var" : type, value: part });
    PLACEHOLDER.lastIndex = 0;
  }
}

function scan(out, code, rules, lang) {
  let i = 0;
  let plain = "";

  while (i < code.length) {
    let matched = null;
    for (const [type, re] of rules) {
      re.lastIndex = i;
      const m = re.exec(code);
      if (m && m.index === i) {
        matched = [type, m[0]];
        break;
      }
    }

    if (!matched) {
      plain += code[i++];
      continue;
    }

    pushValue(out, "plain", plain);
    plain = "";

    const [type, value] = matched;
    // The JSON payload of a curl command is the part readers actually study,
    // so it is highlighted as JSON rather than as one long shell string.
    if (lang === "shell" && type === "str" && /^'\s*[[{]/.test(value)) {
      out.push({ type: "punct", value: value[0] });
      scan(out, value.slice(1, -1), JSON_RULES, "json");
      out.push({ type: "punct", value: value[value.length - 1] });
    } else {
      pushValue(out, type, value);
    }
    i += value.length;
  }

  pushValue(out, "plain", plain);
}

export function tokenize(code, lang) {
  const rules = RULES[lang];
  const text = String(code ?? "");
  if (!rules) return [{ type: "plain", value: text }];
  const out = [];
  scan(out, text, rules, rules === SHELL_RULES ? "shell" : lang);
  return out;
}

// Tokens are grouped per source line so the viewer can render a line-number
// gutter and still wrap long lines under it.
export function tokenizeLines(code, lang) {
  const lines = [[]];
  for (const token of tokenize(code, lang)) {
    const parts = token.value.split("\n");
    parts.forEach((part, i) => {
      if (i > 0) lines.push([]);
      if (part) lines[lines.length - 1].push({ type: token.type, value: part });
    });
  }
  return lines;
}
