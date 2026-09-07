import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Menu, X } from "lucide-react";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const bgFromColor = "from-gray-50";
  const overlayColor = "bg-gray-50";

  return (
    <div className="PX-1 py-2 flex h-screen overflow-hidden flex-col bg-gray-50 text-gray-900 transition-colors duration-300">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center p-2">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Main content container */}
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={closeSidebar}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          } w-full lg:w-auto`}
        >
          <div className="w-full h-full relative px-2">
            <button
              onClick={closeSidebar}
              className="lg:hidden absolute top-8 right-4 z-50 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
            <Sidebar
              onItemClick={closeSidebar}
              shouldAnimate={isMobile && isSidebarOpen}
            />
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col overflow-hidden min-w-0 relative">
          {/* Main content */}
          <div className="flex-1 overflow-y-auto overscroll-auto relative ">
            <div
              className={`sticky top-0 h-8 bg-gradient-to-b ${bgFromColor} to-transparent pointer-events-none z-10`}
            ></div>

            <div className="max-w-5xl mx-auto p-4 sm:p-6 w-full border rounded-2xl bg-white shadow-sm">
              {children}
            </div>

            <div
              className={`sticky bottom-0 h-8 bg-gradient-to-t ${bgFromColor} to-transparent pointer-events-none z-10`}
            ></div>

            <div
              className={`fixed inset-0 -z-10 ${overlayColor} opacity-0 
              [overflow-anchor:none] [overscroll-behavior:contain]`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
