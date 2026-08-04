// params — array coming from markdown frontmatter:
// [{ name, type, required, desc }, ...]
export default function ParamsTable({ params }) {
  if (!params?.length) return null;

  return (
    <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
      {params.map((p, i) => (
        <div
          key={p.name}
          className={`px-4 py-3 ${
            i !== params.length - 1 ? "border-b border-gray-100" : ""
          }`}
        >
          <div className="flex items-center gap-2 flex-wrap">
            <code className="text-[13px] font-semibold text-brand">
              {p.name}
            </code>
            <span className="text-xs text-gray-400 font-mono">{p.type}</span>
            {p.required ? (
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-red-50 text-red-500">
                required
              </span>
            ) : (
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">
                optional
              </span>
            )}
          </div>
          <p className="text-[13px] text-gray-600 mt-1 leading-relaxed">
            {p.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
