import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getNavSections } from "../lib/content";

const linkClass = (isActive) =>
  `relative block text-[13px] pl-3 pr-2.5 py-1.5 rounded-md transition-colors ${
    isActive
      ? "bg-brand/10 text-brand font-semibold before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-[3px] before:rounded-full before:bg-brand"
      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
  }`;

// Ichki ro'yxati bor element uchun — havola bilan strelkani birlashtiruvchi
// qator: fon va matn rangi ikkalasiga umumiy bo'ladi.
const groupRowClass = (isActive) =>
  `relative flex items-center rounded-md transition-colors ${
    isActive
      ? "bg-brand/10 text-brand font-semibold before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-[3px] before:rounded-full before:bg-brand"
      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
  }`;

function DocLink({ item, nested = false, onClick }) {
  return (
    <NavLink
      to={`/docs/${item.slug}`}
      onClick={onClick}
      className={({ isActive }) => linkClass(isActive)}
    >
      {({ isActive }) => (
        <span data-active={isActive ? "true" : undefined}>
          {nested ? item.navTitle || item.title : item.title}
        </span>
      )}
    </NavLink>
  );
}

export default function Sidebar({ sidebarOpen }) {
  const sections = getNavSections();
  const location = useLocation();
  const asideRef = useRef(null);

  // Ichki sahifalari bor bo'limlar (masalan "Transfer create") yig'ilgan
  // holda turadi — strelka bosilganda ochiladi.
  const [openGroups, setOpenGroups] = useState({});

  const currentSlug = location.pathname.replace(/^\/docs\//, "");

  // Ochiq sahifa qaysidir guruhning ichida bo'lsa — o'sha guruh avtomatik
  // ochiladi (havola bo'yicha kirilganda ham ko'rinib turadi).
  useEffect(() => {
    for (const section of sections) {
      for (const item of section.items) {
        if (item.children?.some((child) => child.slug === currentSlug)) {
          setOpenGroups((prev) =>
            prev[item.slug] ? prev : { ...prev, [item.slug]: true },
          );
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlug]);

  // Faol havolani sidebar ichida ko'rinadigan joyga surib qo'yamiz
  // (skroll bilan sahifa o'zgarganda ham yo'qolib qolmaydi).
  useEffect(() => {
    const active = asideRef.current?.querySelector('[data-active="true"]');
    if (active) active.scrollIntoView({ block: "nearest" });
  }, [location.pathname, openGroups]);

  const toggleGroup = (slug) =>
    setOpenGroups((prev) => ({ ...prev, [slug]: !prev[slug] }));

  return (
    <aside
      ref={asideRef}
      className={`${
        sidebarOpen ? "block" : "hidden"
      } md:block w-64 shrink-0 border-r border-gray-100 px-4 py-6 sticky top-14 self-start h-[calc(100vh-56px)] overflow-y-auto sidebar-scroll`}
    >
      {sections.map((section) => (
        <div key={section.key} className="mb-6">
          <h4 className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2">
            {section.title}
          </h4>
          <ul className="space-y-0.5">
            {section.items.map((item) => {
              const children = item.children ?? [];

              if (children.length === 0) {
                return (
                  <li key={item.slug}>
                    <DocLink item={item} />
                  </li>
                );
              }

              const isOpen = Boolean(openGroups[item.slug]);
              const isActive = currentSlug === item.slug;

              return (
                <li key={item.slug}>
                  {/* Havola va strelka bitta plashka ichida — fon, rang va
                      chap chiziq ikkalasiga umumiy. */}
                  <div className={groupRowClass(isActive)}>
                    <NavLink
                      to={`/docs/${item.slug}`}
                      onClick={() => toggleGroup(item.slug)}
                      className="min-w-0 flex-1 text-[13px] pl-3 pr-1 py-1.5"
                    >
                      <span data-active={isActive ? "true" : undefined}>
                        {item.title}
                      </span>
                    </NavLink>
                    <button
                      type="button"
                      onClick={() => toggleGroup(item.slug)}
                      aria-expanded={isOpen}
                      aria-label={`${item.title} — ${isOpen ? "yopish" : "ochish"}`}
                      className={`shrink-0 self-stretch flex items-center pl-1 pr-2.5 ${
                        isActive ? "text-brand" : "text-gray-400"
                      }`}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        width="14"
                        height="14"
                        aria-hidden="true"
                        className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
                      >
                        <path
                          d="M6 4l4 4-4 4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  {isOpen && (
                    <ul className="mt-0.5 ml-3 pl-2 border-l border-gray-100 space-y-0.5">
                      {children.map((child) => (
                        <li key={child.slug}>
                          <DocLink item={child} nested />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}
