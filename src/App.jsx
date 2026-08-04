import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DocPage from "./components/DocPage";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex">
          <Sidebar sidebarOpen={sidebarOpen} />
          <div className="flex-1 max-w-[1100px]">
            <Routes>
              <Route path="/" element={<Navigate to="/docs/intro" replace />} />
              <Route path="/docs/:slug" element={<DocPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
