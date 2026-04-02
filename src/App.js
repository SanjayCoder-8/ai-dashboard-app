import React from "react";
import Dashboard from "./components/Dashboard";
import Insights from "./components/Insights";
import Architecture from "./components/Architecture";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">

      {/* 🔹 SIDEBAR */}
      <div className="w-64 bg-gray-900 p-6 shadow-lg hidden md:block">
        <h2 className="text-2xl font-bold mb-10 text-blue-400">
          AI Analytics
        </h2>

        <nav className="space-y-4">
          <p className="text-gray-400 hover:text-white cursor-pointer">Dashboard</p>
          <p className="text-gray-400 hover:text-white cursor-pointer">Insights</p>
          <p className="text-gray-400 hover:text-white cursor-pointer">Architecture</p>
        </nav>
      </div>

      {/* 🔹 MAIN CONTENT */}
      <div className="flex-1">

        {/* 🔥 HEADER */}
        <div className="bg-gray-900 px-6 py-4 border-b border-gray-800 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">
            AI Retail Insights Platform
          </h1>
          <span className="text-sm text-gray-400">
            AWS + AI Pipeline
          </span>
        </div>

        {/* 🔹 PAGE CONTENT */}
        <div className="p-6 space-y-10 max-w-7xl mx-auto">

          <Dashboard />
          <Insights />
          <Architecture />

        </div>
      </div>
    </div>
  );
}

export default App;