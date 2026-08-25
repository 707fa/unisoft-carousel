import { useId, useMemo, useRef, useState } from "react";
import { WrapText } from "lucide-react";
import { parseCurl } from "../lib/curl";
import { useWrap } from "../lib/useWrap";
import CodeSurface from "./CodeSurface";
import CopyButton from "./CopyButton";

const LANGUAGES = {
  curl: { label: "cURL", syntax: "curl" },
  node: { label: "Node.js", syntax: "node" },
  python: { label: "Python", syntax: "python" },
};

// Method colours follow the convention every API client uses, so the verb is
// readable before the word is.
const METHOD_COLOR = {
  GET: "text-code-str",
  POST: "text-code-key",
  PUT: "text-code-flag",
  PATCH: "text-code-kw",
  DELETE: "text-code-var",
};

const PLACEHOLDER = /(\{\{[^{}]+\}\})/g;

// Renders `{{host}}` as a distinct token wherever a value is shown outside a
// code pane — the URL bar and the headers table.
function withPlaceholders(value) {
  return String(value)
    .split(PLACEHOLDER)
    .filter(Boolean)
    .map((part, i) =>
      part.startsWith("{{") && part.endsWith("}}") ? (
        <span
          key={i}
          className="rounded-[3px] bg-code-var/[0.14] px-[3px] text-code-var"
        >
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      ),
    );
}

function formatBytes(text) {
  const bytes = new TextEncoder().encode(text ?? "").length;
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(bytes < 10240 ? 2 : 1)} KB`;
}

function safeParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function TabList({
  label,
  tabs,
  activeId,
  onChange,
  variant = "underline",
  className = "",
}) {
  const listRef = useRef(null);

  const focusTab = (id) => {
    onChange(id);
    listRef.current?.querySelector(`[data-tab="${id}"]`)?.focus();
  };

  const handleKeyDown = (event) => {
    const index = tabs.findIndex((tab) => tab.id === activeId);
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      const step = event.key === "ArrowRight" ? 1 : -1;
      focusTab(tabs[(index + step + tabs.length) % tabs.length].id);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusTab(tabs[0].id);
    } else if (event.key === "End") {
      event.preventDefault();
      focusTab(tabs[tabs.length - 1].id);
    }
  };

  // The fade is painted in the bar colour, so it only becomes visible once a
  // tab actually scrolls under it — a cue that the row continues.
  return (
    <div
      className={`relative min-w-0 after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:w-6 after:bg-gradient-to-r after:from-transparent after:to-console-bar ${className}`}
    >
      <div
        ref={listRef}
        role="tablist"
        aria-label={label}
        aria-orientation="horizontal"
        onKeyDown={handleKeyDown}
        className={`sidebar-scroll flex items-center overflow-x-auto ${
          variant === "pill" ? "gap-1" : ""
        }`}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={tab.tabId}
              data-tab={tab.id}
              aria-selected={isActive}
              aria-controls={tab.panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onChange(tab.id)}
              className={
                variant === "pill"
                  ? `shrink-0 whitespace-nowrap rounded-md px-2.5 py-1 text-[12px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-console-accent ${
                      isActive
                        ? "bg-console-raised text-console-text"
                        : "text-console-dim hover:bg-console-raised/60 hover:text-console-text"
                    }`
                  : `relative shrink-0 whitespace-nowrap px-3 py-2.5 text-[12.5px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-console-accent ${
                      isActive
                        ? "font-medium text-console-text after:absolute after:inset-x-2.5 after:bottom-0 after:h-[2px] after:rounded-full after:bg-console-accent"
                        : "text-console-dim hover:text-console-text"
                    }`
              }
            >
              {tab.label}
              {tab.meta ? (
                <span className="ml-1.5 font-mono text-[10.5px] text-console-dim">
                  {tab.meta}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function HeadersTable({ headers }) {
  return (
    <div className="overflow-x-auto bg-console-pane">
      <div className="grid grid-cols-[minmax(9rem,0.4fr)_minmax(0,1fr)] gap-x-6 border-b border-console-line px-4 py-2 text-[10.5px] font-semibold uppercase tracking-[0.09em] text-console-dim">
        <span>Key</span>
        <span>Value</span>
      </div>
      <div className="divide-y divide-console-line/60">
        {headers.map((header) => (
          <div
            key={header.key}
            className="grid grid-cols-[minmax(9rem,0.4fr)_minmax(0,1fr)] gap-x-6 px-4 py-2 font-mono text-[12.5px]"
          >
            <span className="truncate text-code-key" title={header.key}>
              {header.key}
            </span>
            <span className="break-all text-console-text">
              {withPlaceholders(header.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// The request and response panes of the page, presented the way an API client
// presents a saved call: one URL bar, request tabs above the payload, and the
// stored example responses below it.
export default function ApiConsole({ doc }) {
  const uid = useId();
  const [wrap, toggleWrap] = useWrap();

  const examples = doc.codeExamples ?? {};
  const languages = Object.keys(examples).filter((key) => examples[key]);
  const requests = useMemo(() => parseCurl(examples.curl), [examples.curl]);
  const responses = doc.responses ?? [];

  const [requestIndex, setRequestIndex] = useState(0);
  const [responseIndex, setResponseIndex] = useState(0);
  const [view, setView] = useState("pretty");

  const request =
    requests[Math.min(requestIndex, Math.max(requests.length - 1, 0))] ?? null;

  const tabs = useMemo(() => {
    const list = [];
    if (request?.body) {
      list.push({
        id: "body",
        label: "Body",
        meta: request.bodyIsJson ? "JSON" : null,
      });
    }
    if (request?.headers.length) {
      list.push({
        id: "headers",
        label: "Headers",
        meta: String(request.headers.length),
      });
    }
    for (const key of languages) {
      list.push({ id: key, label: LANGUAGES[key]?.label ?? key });
    }
    return list.map((tab) => ({
      ...tab,
      tabId: `${uid}-tab-${tab.id}`,
      panelId: `${uid}-panel-${tab.id}`,
    }));
  }, [request, languages.join("|"), uid]);

  const [tabId, setTabId] = useState(null);
  const activeTab = tabs.find((tab) => tab.id === tabId) ?? tabs[0];

  if (!tabs.length && !responses.length) return null;

  const activeResponse =
    responses[Math.min(responseIndex, Math.max(responses.length - 1, 0))];
  const parsedResponse = activeResponse ? safeParse(activeResponse.code) : null;
  const responsePretty = parsedResponse
    ? JSON.stringify(parsedResponse, null, 2)
    : (activeResponse?.code ?? "");
  const responseRaw = parsedResponse
    ? JSON.stringify(parsedResponse)
    : (activeResponse?.code ?? "");
  const responseCode = view === "pretty" ? responsePretty : responseRaw;
  const errorCode = parsedResponse?.error?.code ?? null;

  const responseTabs = responses.map((response, i) => ({
    id: String(i),
    label: response.label || `Example ${i + 1}`,
    tabId: `${uid}-res-tab-${i}`,
    panelId: `${uid}-res-panel`,
  }));

  const copyAll = request
    ? examples.curl
    : (examples[languages[0]] ?? activeResponse?.code ?? "");

  return (
    <section
      aria-label={`${doc.title} request and response`}
      className="doc-console overflow-hidden rounded-xl bg-console-bg ring-1 ring-console-line"
    >
      {request && (
        <div className="flex items-center gap-3 border-b border-console-line bg-console-bar px-3 py-2.5">
          <span
            className={`shrink-0 font-mono text-[11px] font-bold uppercase tracking-[0.08em] ${
              METHOD_COLOR[request.method] ?? "text-console-text"
            }`}
          >
            {request.method}
          </span>
          <span
            title={request.url}
            className="min-w-0 flex-1 truncate font-mono text-[12.5px] text-console-text"
          >
            {withPlaceholders(request.url)}
          </span>
          <CopyButton text={copyAll} label="Copy request" />
        </div>
      )}

      {requests.length > 1 && (
        <TabList
          label="Requests on this page"
          variant="pill"
          className="border-b border-console-line bg-console-bar px-2 py-1.5"
          activeId={String(requestIndex)}
          onChange={(id) => setRequestIndex(Number(id))}
          tabs={requests.map((item, i) => ({
            id: String(i),
            label: item.name,
            tabId: `${uid}-req-tab-${i}`,
            panelId: `${uid}-panel-${activeTab?.id ?? "body"}`,
          }))}
        />
      )}

      {activeTab && (
        <>
          <div className="flex items-stretch justify-between gap-2 border-b border-console-line bg-console-bar">
            <TabList
              label="Request payload"
              tabs={tabs}
              activeId={activeTab.id}
              onChange={setTabId}
              className="flex-1 px-1"
            />
            <div className="flex shrink-0 items-center gap-0.5 pr-2">
              <button
                type="button"
                onClick={toggleWrap}
                aria-pressed={wrap}
                title={wrap ? "Disable line wrapping" : "Wrap long lines"}
                aria-label={wrap ? "Disable line wrapping" : "Wrap long lines"}
                className={`grid size-7 place-items-center rounded-md transition-[color,background-color,scale] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-console-accent active:scale-[0.96] ${
                  wrap
                    ? "bg-console-raised text-console-text"
                    : "text-console-dim hover:bg-console-raised hover:text-console-text"
                }`}
              >
                <WrapText size={14} strokeWidth={1.75} aria-hidden />
              </button>
              <CopyButton
                text={
                  activeTab.id === "body"
                    ? request.body
                    : activeTab.id === "headers"
                      ? request.headers
                          .map((h) => `${h.key}: ${h.value}`)
                          .join("\n")
                      : examples[activeTab.id]
                }
                label={`Copy ${activeTab.label.toLowerCase()}`}
              />
            </div>
          </div>

          <div
            role="tabpanel"
            id={activeTab.panelId}
            aria-labelledby={activeTab.tabId}
            className="bg-console-pane"
          >
            {activeTab.id === "headers" ? (
              <HeadersTable headers={request.headers} />
            ) : (
              <CodeSurface
                code={
                  activeTab.id === "body"
                    ? request.body
                    : examples[activeTab.id]
                }
                lang={
                  activeTab.id === "body"
                    ? "json"
                    : (LANGUAGES[activeTab.id]?.syntax ?? "text")
                }
                wrap={wrap}
                label={`${activeTab.label} — ${doc.title}`}
                className="max-h-[38vh]"
              />
            )}
          </div>
        </>
      )}

      {activeResponse && (
        <div className="border-t border-console-line">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 bg-console-bar px-3 py-2">
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-console-dim">
              Response
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[11.5px] text-code-str">
              <span aria-hidden className="size-1.5 rounded-full bg-code-str" />
              200 OK
            </span>
            {errorCode !== null && (
              <span className="rounded font-mono text-[11.5px] text-code-var">
                JSON-RPC error {errorCode}
              </span>
            )}
            <span className="font-mono text-[11.5px] tabular-nums text-console-dim">
              {formatBytes(responseRaw)}
            </span>

            <div className="ml-auto flex items-center gap-0.5">
              <div className="mr-1 flex rounded-md bg-console-pane p-0.5">
                {["pretty", "raw"].map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setView(mode)}
                    aria-pressed={view === mode}
                    className={`rounded px-2 py-0.5 text-[11.5px] capitalize transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-console-accent ${
                      view === mode
                        ? "bg-console-raised text-console-text"
                        : "text-console-dim hover:text-console-text"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
              <CopyButton text={responseCode} label="Copy response" />
            </div>
          </div>

          {responseTabs.length > 1 && (
            <TabList
              label="Example responses"
              variant="pill"
              className="border-b border-console-line bg-console-bar px-2 pb-1.5"
              tabs={responseTabs}
              activeId={String(responseIndex)}
              onChange={(id) => setResponseIndex(Number(id))}
            />
          )}

          <div role="tabpanel" id={`${uid}-res-panel`}>
            <CodeSurface
              code={responseCode}
              lang="json"
              wrap={wrap}
              label={`Response — ${activeResponse.label || doc.title}`}
              className="max-h-[38vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
