import { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, FileText, Key, Repeat, Compass } from "lucide-react";
import { allDocs, CATEGORY_LABELS } from "../lib/content";

const SUGGESTED_SLUGS = ["login", "providers", "transfer-create", "countries-list"];

const CATEGORY_ICON = {
  overview: Compass,
  connection: Key,
  methods: Repeat,
  payments: FileText,
};

function ResultRow({ doc, onSelect }) {
  const Icon = CATEGORY_ICON[doc.category] || FileText;
  return (
    <button
      onClick={() => onSelect(doc.slug)}
      className="w-full flex items-start gap-3 text-left px-5 py-2.5 hover:bg-gray-50 transition-colors rounded-lg"
    >
      <Icon size={16} className="text-brand mt-0.5 shrink-0" />
      <div className="min-w-0">
        <div className="text-[14px] font-medium text-gray-900 truncate">
          {doc.title}
        </div>
        <div className="text-[12px] text-gray-400 truncate">
          {CATEGORY_LABELS[doc.category] || doc.category}
          {doc.rpcMethod ? ` · ${doc.rpcMethod}` : ""}
        </div>
      </div>
    </button>
  );
}

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 0);
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [open]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allDocs
      .filter((doc) => {
        const haystack = `${doc.title} ${doc.body} ${doc.rpcMethod || ""}`.toLowerCase();
        return haystack.includes(q);
      })
      .slice(0, 8);
  }, [query]);

  const suggested = useMemo(
    () =>
      SUGGESTED_SLUGS.map((slug) => allDocs.find((d) => d.slug === slug)).filter(
        Boolean
      ),
    []
  );

  if (!open) return null;

  const handleSelect = (slug) => {
    navigate(`/docs/${slug}`);
    onClose();
  };

  const showingResults = query.trim().length > 0;

  return (
    <div className="fixed inset-0 z-50 bg-black/40" onClick={onClose}>
      {/* Matches the navbar's grid-cols-3 layout — the search box
          appears exactly where the navbar button is positioned. */}
      <div className="grid grid-cols-3 items-start px-4 md:px-6 h-14">
        <div />
        <div
          className="mx-auto w-full max-w-xl mt-1.5"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
              <Search size={18} className="text-gray-400 shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the docs or ask a question"
                className="flex-1 text-[15px] outline-none placeholder:text-gray-400"
              />
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto py-3">
              {showingResults ? (
                results.length === 0 ? (
                  <p className="px-5 py-8 text-center text-[13px] text-gray-400">
                    Nothing found
                  </p>
                ) : (
                  <>
                    <p className="px-5 pb-1 text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
                      Results
                    </p>
                    {results.map((doc) => (
                      <ResultRow key={doc.slug} doc={doc} onSelect={handleSelect} />
                    ))}
                  </>
                )
              ) : (
                <>
                  <p className="px-5 pb-1 text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
                    Suggested
                  </p>
                  {suggested.map((doc) => (
                    <ResultRow key={doc.slug} doc={doc} onSelect={handleSelect} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}
