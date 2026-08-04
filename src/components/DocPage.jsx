import { useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronRight } from "lucide-react";
import { getDocBySlug, getNavSections } from "../lib/content";
import CodeBlock from "./CodeBlock";
import ParamsTable from "./ParamsTable";
import MarkdownPre from "./MarkdownPre";

const markdownComponents = {
  pre: MarkdownPre,
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
};

export default function DocPage() {
  const { slug } = useParams();
  const doc = getDocBySlug(slug);

  if (!doc) return <Navigate to="/docs/intro" replace />;

  const section = getNavSections().find((s) =>
    s.items.some((i) => i.slug === slug)
  );

  const hasCode = doc.codeExamples && Object.keys(doc.codeExamples).length > 0;

  return (
    <main className="flex-1 min-w-0 px-4 md:px-8 py-8">
      <div className="flex items-center gap-1.5 text-[13px] text-gray-400 mb-4">
        <span>{section?.title}</span>
        <ChevronRight size={13} />
        <span className="text-gray-700">{doc.title}</span>
      </div>

      <div
        className={`grid grid-cols-1 gap-10 ${
          hasCode ? "lg:grid-cols-[minmax(0,1fr)_420px]" : ""
        }`}
      >
        {/* Text column */}
        <div>
          <h1 className="text-[28px] font-bold tracking-tight mb-3">
            {doc.title}
          </h1>

          {doc.method && doc.endpoint && (
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[11px] font-bold px-2 py-1 rounded text-white bg-brand">
                {doc.method}
              </span>
              <code className="text-[13px] text-gray-700">
                {doc.endpoint}
              </code>
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
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {doc.body}
            </ReactMarkdown>
          </div>

          {doc.params && (
            <>
              <h2 className="text-[19px] font-semibold mt-8 mb-3">
                Parameters
              </h2>
              <ParamsTable params={doc.params} />
            </>
          )}
        </div>

        {/* Code column — only visible when codeExamples is present */}
        {hasCode && (
          <div className="self-start">
            <CodeBlock codeExamples={doc.codeExamples} />
          </div>
        )}
      </div>
    </main>
  );
}
