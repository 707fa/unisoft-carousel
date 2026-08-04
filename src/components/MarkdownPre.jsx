import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function MarkdownPre({ children }) {
  const [copied, setCopied] = useState(false);

  const getText = (node) => {
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map(getText).join("");
    if (node?.props?.children) return getText(node.props.children);
    return "";
  };

  const handleCopy = () => {
    const text = getText(children);
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute top-2.5 right-2.5 z-10 p-1.5 rounded-md bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Copy"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
      <pre>{children}</pre>
    </div>
  );
}
