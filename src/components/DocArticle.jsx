import { forwardRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronRight } from "lucide-react";
import { getNavSections } from "../lib/content";
import ApiConsole from "./ApiConsole";
import ParamsTable from "./ParamsTable";
import PageActions from "./PageActions";

// Wide markdown tables scroll inside their own container instead of pushing
// the whole page sideways on narrow viewports.
const MARKDOWN_COMPONENTS = {
  table: ({ node, ...props }) => (
    <div className="docs-table-scroll">
      <table {...props} />
    </div>
  ),
};

// A single document (page) — multiple instances stack vertically to form
// a continuous (infinite) scroll. `first` marks the first page in the stream
// (no divider line is rendered above it).
const DocArticle = forwardRef(function DocArticle({ doc, first }, ref) {
  // A page can also be a nested sidebar item, so the section lookup
  // checks `children` too.
  const section = getNavSections().find((s) =>
    s.items.some(
      (i) =>
        i.slug === doc.slug ||
        (i.children ?? []).some((child) => child.slug === doc.slug)
    )
  );

  const hasCode = doc.codeExamples && Object.keys(doc.codeExamples).length > 0;
  const hasAside = hasCode || (doc.responses ?? []).length > 0;

  return (
    <article
      ref={ref}
      data-slug={doc.slug}
      className={`px-4 md:px-6 lg:px-8 ${first ? "pt-8" : "pt-14 mt-14 border-t border-gray-100"} pb-8`}
    >
      <div className="flex items-center gap-1.5 text-[13px] text-gray-400 mb-3">
        <span>{section?.title}</span>
        <ChevronRight size={13} aria-hidden />
        <span className="text-gray-700">{doc.title}</span>
      </div>

      {/* Copy the whole page as Markdown, or open it as YAML */}
      <PageActions doc={doc} />

      {/* The console takes every pixel the prose column does not need: prose is
          capped at a readable measure, the console absorbs the rest. */}
      <div
        className={`grid grid-cols-1 gap-8 xl:gap-10 ${
          hasAside
            ? "xl:grid-cols-[minmax(0,1fr)_minmax(26rem,42%)] 2xl:grid-cols-[minmax(0,46rem)_minmax(0,1fr)]"
            : "max-w-[900px]"
        }`}
      >
        {/* Text column */}
        <div className="min-w-0">
          <h1 className="text-[28px] font-bold tracking-tight mb-3 text-balance">
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
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-[11px] font-bold px-2 py-1 rounded text-white bg-brand">
                JSON-RPC
              </span>
              <code className="text-[13px] text-gray-700">
                method: "{doc.rpcMethod}"
              </code>
            </div>
          )}

          <div className="docs-prose">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={MARKDOWN_COMPONENTS}>
              {doc.body}
            </ReactMarkdown>
          </div>

          {doc.params && (
            <>
              <h2 className="text-[19px] font-semibold mt-8 mb-3">Parameters</h2>
              <ParamsTable params={doc.params} />
            </>
          )}
        </div>

        {/* Right column — the request/response console for this endpoint */}
        {hasAside && (
          <div className="min-w-0 self-start xl:sticky xl:top-[4.75rem]">
            <ApiConsole doc={doc} />
          </div>
        )}
      </div>
    </article>
  );
});

export default DocArticle;
