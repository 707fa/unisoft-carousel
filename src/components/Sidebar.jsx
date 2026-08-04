import { NavLink } from "react-router-dom";
import { getNavSections } from "../lib/content";

export default function Sidebar({ sidebarOpen }) {
  const sections = getNavSections();

  return (
    <aside
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
            {section.items.map((item) => (
              <li key={item.slug}>
                <NavLink
                  to={`/docs/${item.slug}`}
                  className={({ isActive }) =>
                    `block text-[13px] px-2.5 py-1.5 rounded-md transition-colors ${
                      isActive
                        ? "bg-brand/10 text-brand font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
