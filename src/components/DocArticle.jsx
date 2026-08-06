import { forwardRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronRight } from "lucide-react";
import { getNavSections } from "../lib/content";
import CodeBlock from "./CodeBlock";
import ResponseBlock from "./ResponseBlock";
import ParamsTable from "./ParamsTable";
import PageActions from "./PageActions";

// Bitta hujjat (sahifa) — bir nechtasi ustma-ust joylashib, uzluksiz
// (cheksiz) skroll hosil qiladi. `first` — oqimdagi birinchi sahifa
// (uning tepasida ajratuvchi chiziq bo'lmaydi).
const DocArticle = forwardRef(function DocArticle({ doc, first }, ref) {
  // Sahifa sidebar'da ichki element bo'lishi ham mumkin — shuning uchun
  // bo'limni qidirishda `children` ham tekshiriladi.
  const section = getNavSections().find((s) =>
    s.items.some(
      (i) =>
        i.slug === doc.slug ||
        (i.children ?? []).some((child) => child.slug === doc.slug)
    )
  );

  const hasCode = doc.codeExamples && Object.keys(doc.codeExamples).length > 0;
  const responses = doc.responses || [];
  const hasAside = hasCode || responses.length > 0;

  return (
    <article
      ref={ref}
      data-slug={doc.slug}
      className={`px-4 md:px-8 ${first ? "pt-8" : "pt-14 mt-14 border-t border-gray-100"} pb-8`}
    >
      <div className="flex items-center gap-1.5 text-[13px] text-gray-400 mb-3">
        <span>{section?.title}</span>
        <ChevronRight size={13} />
        <span className="text-gray-700">{doc.title}</span>
      </div>

      {/* Sahifani to'liq nusxalash (Markdown) va YAML ko'rinishida ochish */}
      <PageActions doc={doc} />

      <div
        className={`grid grid-cols-1 gap-10 ${
          hasAside ? "lg:grid-cols-[minmax(0,1fr)_420px]" : ""
        }`}
      >
        {/* Matn ustuni */}
        <div>
          <h1 className="text-[28px] font-bold tracking-tight mb-3">
            {doc.title}
          </h1>

          {doc.method && doc.endpoint && (
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[11px] font-bold px-2 py-1 rounded text-white bg-brand">
                {doc.method}
              </span>
              <code className="text-[13px] text-gray-700">{doc.endpoint}</code>
            </div>
          )}

          {doc.rpcMethod && (
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[11px] font-bold px-2 py-1 rounded text-white bg-brand">
                JSON-RPC
              </span>
              <code className="text-[13px] text-gray-700">
                method: "{doc.rpcMethod}"
              </code>
            </div>
          )}

          <div className="docs-prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{doc.body}</ReactMarkdown>
          </div>

          {doc.params && (
            <>
              <h2 className="text-[19px] font-semibold mt-8 mb-3">Parameters</h2>
              <ParamsTable params={doc.params} />
            </>
          )}
        </div>

        {/* O'ng ustun — so'rov (tepada) va javob (ostida) ustma-ust */}
        {hasAside && (
          <div className="lg:sticky lg:top-20 self-start space-y-4">
            {hasCode && <CodeBlock codeExamples={doc.codeExamples} />}
            {responses.map((r, i) => (
              <ResponseBlock key={i} label={r.label} code={r.code} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
});

export default DocArticle;
