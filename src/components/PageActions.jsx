import { useEffect, useState } from "react";
import { Copy, Check, FileCode2, X } from "lucide-react";
import yaml from "js-yaml";

// Sahifa matnini (sarlavha, tavsif, parametrlar, so'rov namunalari va
// javoblar) bitta Markdown matnga yig'amiz.
function docToMarkdown(doc) {
  const parts = [`# ${doc.title}`];

  if (doc.method && doc.endpoint) parts.push(`${doc.method} ${doc.endpoint}`);
  if (doc.rpcMethod) parts.push(`JSON-RPC method: "${doc.rpcMethod}"`);
  if (doc.body?.trim()) parts.push(doc.body.trim());

  if (doc.params?.length) {
    const rows = doc.params.map(
      (p) =>
        `- \`${p.name}\` (${p.type}${p.required ? ", required" : ", optional"})` +
        (p.desc ? ` — ${p.desc}` : ""),
    );
    parts.push(["## Parameters", ...rows].join("\n"));
  }

  const examples = Object.entries(doc.codeExamples || {});
  if (examples.length) {
    parts.push(
      [
        "## Request",
        ...examples.map(
          ([lang, code]) =>
            `### ${lang}\n\`\`\`\n${String(code).trim()}\n\`\`\``,
        ),
      ].join("\n\n"),
    );
  }

  if (doc.responses?.length) {
    parts.push(
      [
        "## Response",
        ...doc.responses.map(
          (r) => `### ${r.label}\n\`\`\`json\n${r.code.trim()}\n\`\`\``,
        ),
      ].join("\n\n"),
    );
  }

  return parts.join("\n\n") + "\n";
}

// Xuddi shu ma'lumot — YAML ko'rinishida (struktura saqlanadi).
function docToYaml(doc) {
  const data = {
    title: doc.title,
    slug: doc.slug,
    category: doc.category,
  };

  if (doc.rpcMethod) data.rpcMethod = doc.rpcMethod;
  if (doc.method) data.method = doc.method;
  if (doc.endpoint) data.endpoint = doc.endpoint;
  if (doc.body?.trim()) data.description = doc.body.trim();

  if (doc.params?.length) {
    data.params = doc.params.map((p) => ({
      name: p.name,
      type: p.type,
      required: Boolean(p.required),
      description: p.desc,
    }));
  }

  const examples = Object.entries(doc.codeExamples || {});
  if (examples.length) {
    data.codeExamples = Object.fromEntries(
      examples.map(([lang, code]) => [lang, String(code).trim()]),
    );
  }

  if (doc.responses?.length) {
    data.responses = doc.responses.map((r) => ({
      label: r.label,
      body: r.code.trim(),
    }));
  }

  // lineWidth: -1 — uzun satrlar bo'linmaydi, ko'p qatorli matn `|` bloki
  // sifatida chiqadi va markdown/JSON namunalari o'zgarmaydi.
  return yaml.dump(data, { lineWidth: -1, noRefs: true });
}

// Clipboard API faqat xavfsiz kontekstda (https / localhost) ishlaydi —
// aks holda eskicha usulga tushamiz.
async function copyText(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // pastdagi zaxira usulga o'tamiz
  }

  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(area);
  return ok;
}

const buttonClass =
  "inline-flex items-center gap-1.5 text-[12px] font-medium px-2.5 py-1.5 rounded-md border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors";

// YAML'ni qora fonda (oq-qora, ranglanmagan) ko'rsatuvchi oyna.
function YamlModal({ title, text, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  const handleCopy = async () => {
    if (!(await copyText(text))) return;
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 bg-black/50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-full flex flex-col rounded-lg overflow-hidden shadow-2xl bg-codebg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="min-w-0">
            <span className="text-[11px] font-bold px-2 py-1 rounded bg-white/10 text-white">
              YAML
            </span>
            <span className="ml-2 text-[13px] text-white/50 truncate">
              {title}
            </span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-[12px] text-white/60 hover:text-white transition-colors px-2 py-1"
              aria-label="Copy YAML"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied" : "Copy"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors p-1"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>
        <pre className="px-4 py-4 overflow-auto text-[13px] leading-relaxed">
          <code className="font-mono whitespace-pre text-white/90">{text}</code>
        </pre>
      </div>
    </div>
  );
}

export default function PageActions({ doc }) {
  const [copied, setCopied] = useState(false);
  const [yamlOpen, setYamlOpen] = useState(false);

  const handleCopyPage = async () => {
    if (!(await copyText(docToMarkdown(doc)))) return;
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <div className="flex items-center gap-2 mb-6">
        <button
          type="button"
          onClick={handleCopyPage}
          className={buttonClass}
          aria-label="Copy page"
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? "Copied" : "Copy page"}
        </button>
        <button
          type="button"
          onClick={() => setYamlOpen(true)}
          className={buttonClass}
          aria-label="Show page as YAML"
        >
          <FileCode2 size={13} />
          YAML
        </button>
      </div>

      {yamlOpen && (
        <YamlModal
          title={doc.title}
          text={docToYaml(doc)}
          onClose={() => setYamlOpen(false)}
        />
      )}
    </>
  );
}
