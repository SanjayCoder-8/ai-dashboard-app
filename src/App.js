import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Insights from "./components/Insights";
import Architecture from "./components/Architecture";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">

      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-900 p-6 z-50 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-blue-400">AI Analytics</h2>
          <button onClick={() => setSidebarOpen(false)} className="text-gray-400 text-xl leading-none">✕</button>
        </div>
        <nav className="space-y-3 text-sm">
          {["Dashboard", "Insights", "Architecture", "Explanation"].map((item) => (
            <p key={item} className="py-2 px-3 rounded-lg hover:bg-gray-800 cursor-pointer text-gray-300">{item}</p>
          ))}
        </nav>
      </div>

      {/* DESKTOP SIDEBAR */}
      <div className="w-56 lg:w-64 bg-gray-900 p-6 shadow-lg hidden md:flex flex-col flex-shrink-0">
        <h2 className="text-xl lg:text-2xl font-bold mb-8 text-blue-400">AI Analytics</h2>
        <nav className="space-y-2 text-sm">
          {["Dashboard", "Insights", "Architecture", "Explanation"].map((item) => (
            <p key={item} className="py-2 px-3 rounded-lg hover:bg-gray-800 cursor-pointer text-gray-300">{item}</p>
          ))}
        </nav>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 min-w-0 flex flex-col">

        {/* HEADER */}
        <div className="bg-gray-900 px-4 py-3 md:px-6 md:py-4 border-b border-gray-800 flex items-center gap-3 sticky top-0 z-30">
          <button
            className="md:hidden text-xl flex-shrink-0"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <h1 className="text-base md:text-xl lg:text-2xl font-semibold flex-1 text-center md:text-left truncate">
            AI Retail Insights Platform
          </h1>
          <span className="hidden md:block text-xs text-gray-400 flex-shrink-0">
            AWS + AI Pipeline
          </span>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto p-3 md:p-6 space-y-6 md:space-y-8 max-w-7xl w-full mx-auto">

          <Dashboard />
          <Insights />
          <Architecture />

          {/* ACCORDION */}
          <div className="bg-gray-900 rounded-2xl border border-gray-800 shadow-lg overflow-hidden">
            <div
              onClick={() => setAccordionOpen(!accordionOpen)}
              className="flex justify-between items-center p-4 md:p-6 cursor-pointer hover:bg-gray-800 transition"
            >
              <h2 className="text-base md:text-xl font-semibold text-blue-400">
                📘 System Architecture Explanation
              </h2>
              <span className="text-gray-400 text-lg flex-shrink-0 ml-2">{accordionOpen ? "−" : "+"}</span>
            </div>
            {accordionOpen && (
              <div className="px-4 md:px-6 pb-6 border-t border-gray-800">
                <p className="text-gray-300 text-sm leading-relaxed mt-4">
                  This system follows an end-to-end data pipeline architecture for retail analytics and AI-driven insights.
                  Raw data lands in S3, gets transformed by Glue, aggregated by Lambda, enriched by Bedrock AI, stored in DynamoDB,
                  exposed via API Gateway, and visualized in this React dashboard.
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
