import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams, useNavigate, useLocation, Navigate } from "react-router-dom";
import { getDocBySlug, getAdjacentDocs, getFirstDocSlug } from "../lib/content";
import DocArticle from "./DocArticle";

const NAV_OFFSET = 57; // sticky navbar height, so a heading never hides under it

// Jump without the global `scroll-behavior: smooth` — positioning a page and
// anchoring after a prepend have to be instant, otherwise the page visibly
// slides and the measured offsets go stale mid-animation.
function scrollToInstant(top) {
  try {
    // `behavior: "instant"` overrides the CSS rule; toggling an inline
    // `scroll-behavior` does not reliably apply before the call and the page
    // ends up animating (or silently not moving at all).
    window.scrollTo({ top, left: 0, behavior: "instant" });
  } catch {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, top);
    root.style.scrollBehavior = previous;
  }
}

// Open a page with its predecessor already mounted above it, so there is
// always something to scroll up into (until the very first page of the docs).
function initialSlugs(slug) {
  if (!slug || !getDocBySlug(slug)) return [];
  const { prev } = getAdjacentDocs(slug);
  return prev ? [prev.slug, slug] : [slug];
}

// Renders documents stacked for continuous scroll in both directions:
// the next page is appended at the bottom, the previous one is prepended at
// the top (with scroll anchoring so the viewport does not jump). The stream
// stops naturally at the first and the last page. Tracks which page is in
// view and keeps the URL and the sidebar marker in sync.
export default function DocStream() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [slugs, setSlugs] = useState(() => initialSlugs(slug));
  // Page that still has to be brought to the top of the viewport. While it is
  // set, the stream must not grow — a sentinel firing with the previous
  // stream would otherwise overwrite the freshly opened one and the scroll
  // would land on the wrong page.
  const [pendingFocus, setPendingFocus] = useState(slug);

  const activeRef = useRef(slug); // currently "active" (URL) page
  const articleRefs = useRef(new Map());
  const topSentinelRef = useRef(null);
  const bottomSentinelRef = useRef(null);
  // Set right before a prepend; consumed by the layout effect that restores
  // the scroll position once the new article is in the DOM.
  const anchorRef = useRef(null);
  // Guards the "grow, then retry positioning" loop below against ever running
  // away if the measurements keep disagreeing.
  const focusRetriesRef = useRef(0);

  // On navigation (sidebar click, logo, direct link), rebuild the stream
  // around that page. URL changes caused by scrolling (state.fromScroll)
  // are intentionally ignored here.
  useEffect(() => {
    if (location.state?.fromScroll) {
      activeRef.current = slug;
      return;
    }
    if (!slug || !getDocBySlug(slug)) return;
    activeRef.current = slug;
    anchorRef.current = null;
    focusRetriesRef.current = 0;
    setSlugs(initialSlugs(slug));
    setPendingFocus(slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, location.key]);

  // Runs before paint: either restore the position after a prepend, or place
  // the freshly opened page at the top of the viewport.
  useLayoutEffect(() => {
    if (anchorRef.current) {
      const { height, scrollY } = anchorRef.current;
      anchorRef.current = null;
      const delta = document.documentElement.scrollHeight - height;
      if (delta) scrollToInstant(scrollY + delta);
      return;
    }

    if (!pendingFocus) return;
    const node = articleRefs.current.get(pendingFocus);
    if (!node) return; // article not mounted yet — try again on the next commit

    const desired = node.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    // A short page near the end of the mounted stream cannot reach the top of
    // the viewport yet — there is nothing below it to scroll against. Pull in
    // the following page and retry, keeping the focus pending.
    if (desired > max && focusRetriesRef.current < 15) {
      const { next } = getAdjacentDocs(slugs[slugs.length - 1]);
      if (next && !slugs.includes(next.slug)) {
        focusRetriesRef.current += 1;
        setSlugs([...slugs, next.slug]);
        return;
      }
    }

    focusRetriesRef.current = 0;
    scrollToInstant(desired < 10 ? 0 : Math.min(desired, max));
    setPendingFocus(null);
  }, [slugs, pendingFocus]);

  const appendNext = useCallback(() => {
    setSlugs((current) => {
      const { next } = getAdjacentDocs(current[current.length - 1]);
      if (!next || current.includes(next.slug)) return current; // end — stop
      return [...current, next.slug];
    });
  }, []);

  const prependPrev = useCallback(() => {
    setSlugs((current) => {
      const { prev } = getAdjacentDocs(current[0]);
      if (!prev || current.includes(prev.slug)) return current; // start — stop
      anchorRef.current = {
        height: document.documentElement.scrollHeight,
        scrollY: window.scrollY,
      };
      return [prev.slug, ...current];
    });
  }, []);

  // Grow the stream at both ends. The observers are torn down and re-created
  // whenever the stream or the pending focus changes, so after a page has been
  // positioned they re-report the current intersection state and loading
  // resumes from the right place.
  useEffect(() => {
    if (pendingFocus) return; // don't grow until the opened page is in place
    const top = topSentinelRef.current;
    const bottom = bottomSentinelRef.current;
    if (!top || !bottom) return;

    // A smaller margin at the top keeps opening a page from pulling in
    // pages above that the reader never scrolled towards.
    const up = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) prependPrev();
      },
      { rootMargin: "300px 0px 0px 0px" }
    );
    const down = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) appendNext();
      },
      { rootMargin: "800px 0px" }
    );
    up.observe(top);
    down.observe(bottom);
    return () => {
      up.disconnect();
      down.disconnect();
    };
  }, [appendNext, prependPrev, slugs, pendingFocus]);

  // Scroll spy: detects which page is at the top of the viewport and updates the URL
  useEffect(() => {
    if (pendingFocus) return; // the URL already points at the page being opened
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
  }, [slugs, pendingFocus, navigate]);

  if (!getDocBySlug(slug)) return <Navigate to={`/docs/${getFirstDocSlug()}`} replace />;

  return (
    <div>
      <div ref={topSentinelRef} aria-hidden className="h-1" />
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
      <div ref={bottomSentinelRef} aria-hidden className="h-1" />
    </div>
  );
}
