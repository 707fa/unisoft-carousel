import { useState } from "react";
import { Copy, Check } from "lucide-react";

// So'rov (request) ostida ko'rsatiladigan javob (response) namunasi.
export default function ResponseBlock({ label, code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-xl bg-codebg">
      <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-white/10">
        <span className="text-xs px-2 py-1 rounded-md font-medium text-emerald-300/90 bg-emerald-400/10">
          {label || "Javob"}
        </span>
        <button
          onClick={handleCopy}
          className="text-white/40 hover:text-white/80 transition-colors p-1"
          aria-label="Nusxalash"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="px-4 py-4 text-[13px] leading-relaxed overflow-x-auto">
        <code className="text-[#e0def4] font-mono whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}
