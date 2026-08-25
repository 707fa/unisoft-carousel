import { useMemo } from "react";
import { tokenizeLines } from "../lib/highlight";

const TOKEN_CLASS = {
  key: "text-code-key",
  str: "text-code-str",
  num: "text-code-num",
  lit: "text-code-lit",
  kw: "text-code-kw",
  flag: "text-code-flag",
  com: "text-code-com",
  punct: "text-code-punct",
  var: "rounded-[3px] bg-code-var/[0.14] px-[3px] text-code-var",
  plain: "",
};

// Syntax-highlighted code with an editor-style line gutter. The gutter stays
// pinned while a long line scrolls sideways, and is excluded from selection so
// copying the block never picks up the numbers.
export default function CodeSurface({ code, lang, wrap, label, className = "" }) {
  // Block scalars in the frontmatter keep a trailing newline, which would
  // otherwise render as a stray empty numbered line at the end.
  const lines = useMemo(
    () => tokenizeLines(String(code ?? "").replace(/\s+$/, ""), lang),
    [code, lang],
  );

  return (
    <pre
      tabIndex={0}
      role="region"
      aria-label={label}
      className={`overflow-auto bg-console-pane font-mono text-[12.5px] leading-[1.7] text-console-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-console-accent ${className}`}
    >
      <code className={`block py-3 ${wrap ? "" : "w-max min-w-full"}`}>
        {lines.map((tokens, i) => (
          <span key={i} className="flex">
            <span
              aria-hidden
              className="sticky left-0 z-10 w-11 shrink-0 select-none bg-console-pane pr-3 text-right tabular-nums text-console-gutter"
            >
              {i + 1}
            </span>
            <span
              className={
                wrap
                  ? "min-w-0 flex-1 whitespace-pre-wrap break-words pr-4"
                  : "whitespace-pre pr-4"
              }
            >
              {tokens.length === 0
                ? "​"
                : tokens.map((token, j) => (
                    <span key={j} className={TOKEN_CLASS[token.type] ?? ""}>
                      {token.value}
                    </span>
                  ))}
            </span>
          </span>
        ))}
      </code>
    </pre>
  );
}
