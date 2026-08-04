import { useEffect, useRef, useState, useCallback } from "react";
import { useParams, useNavigate, useLocation, Navigate } from "react-router-dom";
import { getDocBySlug, getAdjacentDocs } from "../lib/content";
import DocArticle from "./DocArticle";

// Hujjatlarni ustma-ust ko'rsatib, uzluksiz (cheksiz) skroll qiladi.
// Pastga yetganda keyingi sahifa avtomatik qo'shiladi; skroll qaysi
// sahifaga yetganini kuzatib, URL va sidebar'dagi faol belgini yangilaydi.
export default function DocStream() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [slugs, setSlugs] = useState(() => (slug ? [slug] : []));
  const activeRef = useRef(slug); // hozir "faol" (URL'dagi) sahifa
  const articleRefs = useRef(new Map());
  const sentinelRef = useRef(null);

  // Navigatsiya (sidebar bosish, logo, to'g'ridan-to'g'ri havola) bo'lganda
  // oqimni shu sahifadan qayta boshlaymiz. Skroll natijasidagi URL o'zgarishi
  // (state.fromScroll) — bu yerda e'tiborsiz qoldiriladi.
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

  // Keyingi sahifani qo'shish
  const appendNext = useCallback(() => {
    setSlugs((prev) => {
      const last = prev[prev.length - 1];
      const { next } = getAdjacentDocs(last);
      if (next && !prev.includes(next.slug)) return [...prev, next.slug];
      return prev;
    });
  }, []);

  // Pastga yetganda (biroz oldinroq) keyingi sahifani yuklaymiz
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

  // Skroll-kuzatuvchi: ekran tepasidagi sahifani aniqlab, URL'ni yangilaydi
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
      // Faqat ekranning yuqori qismidagi sahifa "faol" hisoblanadi
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
