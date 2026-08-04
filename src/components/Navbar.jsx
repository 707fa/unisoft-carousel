import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import SearchModal from "./SearchModal";


export default function Navbar({ sidebarOpen, setSidebarOpen }) {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    function handleKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200">
      <div className="grid grid-cols-3 items-center px-4 md:px-6 h-14">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-1"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link
            to="/docs/intro"
            className="flex items-center gap-2"
            aria-label="Bosh sahifa — Loyiha haqida"
          >
            <img src="/logo.png" alt="Unisoft" className="h-8 w-auto" />
          </Link>
        </div>

        {!searchOpen && (
          <button
            onClick={() => setSearchOpen(true)}
            className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 w-72 mx-auto hover:border-gray-300 transition-colors"
          >
            <Search size={14} className="text-gray-400" />
            <span className="text-[13px] text-gray-400">Qidirish...</span>
            <span className="ml-auto text-[11px] text-gray-400 border border-gray-200 rounded px-1">
              ⌘K
            </span>
          </button>
        )}

        <div />
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
