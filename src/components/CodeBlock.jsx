import { useState } from "react";
import { Copy, Check } from "lucide-react";

const LABELS = { curl: "curl", node: "Node.js", python: "Python" };

// codeExamples — markdown frontmatter'dan keladigan { curl, node, python } obyekti
export default function CodeBlock({ codeExamples }) {
  const tabs = Object.keys(codeExamples || {});
  const [active, setActive] = useState(tabs[0]);
  const [copied, setCopied] = useState(false);

  if (!tabs.length) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(codeExamples[active]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-xl bg-codebg">
      <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-white/10">
        <div className="flex gap-1">
          {tabs.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`text-xs px-3 py-1.5 rounded-md font-medium transition-colors ${
                active === key
                  ? "bg-white/10 text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {LABELS[key] || key}
            </button>
          ))}
        </div>
        <button
          onClick={handleCopy}
          className="text-white/40 hover:text-white/80 transition-colors p-1"
          aria-label="Nusxalash"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="px-4 py-4 text-[13px] leading-relaxed overflow-x-auto">
        <code className="text-[#e0def4] font-mono whitespace-pre">
          {codeExamples[active]}
        </code>
      </pre>
    </div>
  );
}
