import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DocStream from "./components/DocStream";
import { getFirstDocSlug } from "./lib/content";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex">
          <Sidebar sidebarOpen={sidebarOpen} />
          {/* min-w-0 lets the console column shrink instead of forcing the
              page to scroll sideways; the cap only bites on very wide displays,
              so the console keeps everything the prose column leaves over. */}
          <div className="flex-1 min-w-0 max-w-[2200px]">
            <Routes>
              <Route path="/" element={<Navigate to={`/docs/${getFirstDocSlug()}`} replace />} />
              <Route path="/docs/:slug" element={<DocStream />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
