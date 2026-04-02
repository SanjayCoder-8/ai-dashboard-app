import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Insights from "./components/Insights";
import Architecture from "./components/Architecture";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">

      {/* 🔥 MOBILE SIDEBAR */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-900 p-6 z-50 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"} md:hidden`}>

        <h2 className="text-2xl font-bold mb-10 text-blue-400">
          AI Analytics
        </h2>

        <nav className="space-y-4">
          <p>Dashboard</p>
          <p>Insights</p>
          <p>Architecture</p>
          <p>Explanation</p>
        </nav>
      </div>

      {/* 🔹 DESKTOP SIDEBAR */}
      <div className="w-64 bg-gray-900 p-6 shadow-lg hidden md:block">
        <h2 className="text-2xl font-bold mb-10 text-blue-400">
          AI Analytics
        </h2>

        <nav className="space-y-4">
          <p>Dashboard</p>
          <p>Insights</p>
          <p>Architecture</p>
          <p>Explanation</p>
        </nav>
      </div>

      {/* 🔹 MAIN CONTENT */}
      <div className="flex-1">

        {/* 🔥 HEADER */}
        <div className="bg-gray-900 px-4 md:px-6 py-4 border-b border-gray-800 flex justify-between items-center">

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          <h1 className="text-lg md:text-2xl font-semibold text-center flex-1">
            AI Retail Insights Platform
          </h1>

          <span className="hidden md:block text-sm text-gray-400">
            AWS + AI Pipeline
          </span>
        </div>

        {/* 🔹 CONTENT */}
        <div className="p-4 md:p-6 space-y-8 md:space-y-10 max-w-7xl mx-auto">

          <Dashboard />
          <Insights />
          <Architecture />

          {/* ACCORDION */}
          <div className="bg-gray-900 rounded-2xl border border-gray-800 shadow-lg overflow-hidden">

            <div
              onClick={() => setOpen(!open)}
              className="flex justify-between items-center p-4 md:p-6 cursor-pointer hover:bg-gray-800"
            >
              <h2 className="text-lg md:text-2xl font-semibold text-blue-400">
                📘 System Architecture Explanation
              </h2>
              <span>{open ? "−" : "+"}</span>
            </div>

            {open && (
              <div className="px-4 md:px-6 pb-6 border-t border-gray-800">
                <p className="text-gray-300 text-sm leading-relaxed mt-4">
                  This system follows an end-to-end data pipeline architecture for retail analytics and AI-driven insights...
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;