import { useEffect, useRef, useState, useCallback } from "react";
import { useParams, useNavigate, useLocation, Navigate } from "react-router-dom";
import { getDocBySlug, getAdjacentDocs } from "../lib/content";
import DocArticle from "./DocArticle";

// Renders documents in a stacked layout for continuous (infinite) scroll.
// Automatically appends the next page when the bottom is reached; tracks
// which page is in view and updates the URL and the active sidebar marker.
export default function DocStream() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [slugs, setSlugs] = useState(() => (slug ? [slug] : []));
  const activeRef = useRef(slug); // currently "active" (URL) page
  const articleRefs = useRef(new Map());
  const sentinelRef = useRef(null);

  // On navigation (sidebar click, logo, direct link), reset the stream
  // to start from that page. URL changes caused by scrolling
  // (state.fromScroll) are intentionally ignored here.
  useEffect(() => {
    if (location.state?.fromScroll) {
      activeRef.current = slug;
      return;
    }
    if (!slug) return;
    activeRef.current = slug;
    setSlugs([slug]);
    window.scrollTo({ top: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, location.key]);

  // Append the next page
  const appendNext = useCallback(() => {
    setSlugs((prev) => {
      const last = prev[prev.length - 1];
      const { next } = getAdjacentDocs(last);
      if (next && !prev.includes(next.slug)) return [...prev, next.slug];
      return prev;
    });
  }, []);

  // Load the next page slightly before reaching the bottom
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) appendNext();
      },
      { rootMargin: "800px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [appendNext, slugs.length]);

  // Scroll spy: detects which page is at the top of the viewport and updates the URL
  useEffect(() => {
    const spy = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const top = visible[0];
        if (!top) return;
        const s = top.target.dataset.slug;
        if (s && s !== activeRef.current) {
          activeRef.current = s;
          navigate(`/docs/${s}`, { replace: true, state: { fromScroll: true } });
        }
      },
      // Only the page in the upper portion of the viewport is considered "active"
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    for (const node of articleRefs.current.values()) {
      if (node) spy.observe(node);
    }
    return () => spy.disconnect();
  }, [slugs, navigate]);

  if (!getDocBySlug(slug)) return <Navigate to="/docs/intro" replace />;

  return (
    <div>
      {slugs.map((s, i) => {
        const d = getDocBySlug(s);
        if (!d) return null;
        return (
          <DocArticle
            key={s}
            doc={d}
            first={i === 0}
            ref={(node) => {
              if (node) articleRefs.current.set(s, node);
              else articleRefs.current.delete(s);
            }}
          />
        );
      })}
      <div ref={sentinelRef} aria-hidden className="h-1" />
    </div>
  );
}
