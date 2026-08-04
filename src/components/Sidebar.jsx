import { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getNavSections } from "../lib/content";

export default function Sidebar({ sidebarOpen }) {
  const sections = getNavSections();
  const location = useLocation();
  const asideRef = useRef(null);

  // Faol havolani sidebar ichida ko'rinadigan joyga surib qo'yamiz
  // (skroll bilan sahifa o'zgarganda ham yo'qolib qolmaydi).
  useEffect(() => {
    const active = asideRef.current?.querySelector('[data-active="true"]');
    if (active) active.scrollIntoView({ block: "nearest" });
  }, [location.pathname]);

  return (
    <aside
      ref={asideRef}
      className={`${
        sidebarOpen ? "block" : "hidden"
      } md:block w-64 shrink-0 border-r border-gray-100 px-4 py-6 sticky top-14 self-start h-[calc(100vh-56px)] overflow-y-auto`}
    >
      {sections.map((section) => (
        <div key={section.key} className="mb-6">
          <h4 className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2">
            {section.title}
          </h4>
          <ul className="space-y-0.5">
            {section.items.map((item) => (
              <li key={item.slug}>
                <NavLink
                  to={`/docs/${item.slug}`}
                  data-active={undefined}
                  className={({ isActive }) =>
                    `relative block text-[13px] pl-3 pr-2.5 py-1.5 rounded-md transition-colors ${
                      isActive
                        ? "bg-brand/10 text-brand font-semibold before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-[3px] before:rounded-full before:bg-brand"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span data-active={isActive ? "true" : undefined}>
                      {item.title}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
