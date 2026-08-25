import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

// Icon-only copy control for the console chrome. The result is announced in a
// live region because the icon swap alone is invisible to a screen reader.
export default function CopyButton({ text, label = "Copy", className = "" }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard?.writeText(text ?? "");
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={label}
      title={label}
      className={`relative grid size-7 place-items-center rounded-md text-console-dim transition-[color,background-color,scale] duration-150 ease-out hover:bg-console-raised hover:text-console-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-console-accent active:scale-[0.96] ${className}`}
    >
      <Copy
        size={14}
        strokeWidth={1.75}
        aria-hidden
        className={`absolute transition-[opacity,scale,filter] duration-200 ease-[cubic-bezier(0.2,0,0,1)] ${
          copied ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-0"
        }`}
      />
      <Check
        size={14}
        strokeWidth={2}
        aria-hidden
        className={`absolute text-code-str transition-[opacity,scale,filter] duration-200 ease-[cubic-bezier(0.2,0,0,1)] ${
          copied ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]"
        }`}
      />
      <span className="sr-only" role="status">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </button>
  );
}
