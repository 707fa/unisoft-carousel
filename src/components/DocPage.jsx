import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronRight, ChevronLeft } from "lucide-react";
import {
  getDocBySlug,
  getNavSections,
  getAdjacentDocs,
} from "../lib/content";
import CodeBlock from "./CodeBlock";
import ResponseBlock from "./ResponseBlock";
import ParamsTable from "./ParamsTable";

export default function DocPage() {
  const { slug } = useParams();
  const doc = getDocBySlug(slug);

  // Boshqa sahifaga o'tilganda tepaga qaytamiz.
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!doc) return <Navigate to="/docs/intro" replace />;

  const section = getNavSections().find((s) =>
    s.items.some((i) => i.slug === slug)
  );

  const { prev, next } = getAdjacentDocs(slug);

  const hasCode = doc.codeExamples && Object.keys(doc.codeExamples).length > 0;
  const responses = doc.responses || [];
  const hasAside = hasCode || responses.length > 0;

  return (
    <main className="flex-1 min-w-0 px-4 md:px-8 py-8">
      <div className="flex items-center gap-1.5 text-[13px] text-gray-400 mb-4">
        <span>{section?.title}</span>
        <ChevronRight size={13} />
        <span className="text-gray-700">{doc.title}</span>
      </div>

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
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {doc.body}
            </ReactMarkdown>
          </div>

          {doc.params && (
            <>
              <h2 className="text-[19px] font-semibold mt-8 mb-3">
                Parametrlar
              </h2>
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

      {/* Sahifadan-sahifaga o'tish */}
      {(prev || next) && (
        <nav className="mt-14 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
          {prev ? (
            <Link
              to={`/docs/${prev.slug}`}
              className="group flex flex-col items-start rounded-lg border border-gray-200 px-4 py-3 hover:border-brand/40 hover:bg-brand/[0.02] transition-colors"
            >
              <span className="flex items-center gap-1 text-[12px] text-gray-400">
                <ChevronLeft size={14} /> Oldingi
              </span>
              <span className="mt-0.5 text-[14px] font-medium text-gray-800 group-hover:text-brand">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/docs/${next.slug}`}
              className="group flex flex-col items-end text-right rounded-lg border border-gray-200 px-4 py-3 hover:border-brand/40 hover:bg-brand/[0.02] transition-colors"
            >
              <span className="flex items-center gap-1 text-[12px] text-gray-400">
                Keyingi <ChevronRight size={14} />
              </span>
              <span className="mt-0.5 text-[14px] font-medium text-gray-800 group-hover:text-brand">
                {next.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}
    </main>
  );
}
