import React from "react";
import Dashboard from "./components/Dashboard";
import DataLinks from "./components/DataLinks";
import Insights from "./components/Insights";
import Architecture from "./components/Architecture";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        🚀 AI Retail Insights Platform
      </h1>

      <div className="grid gap-6">
        <DataLinks />
        <Dashboard />
        <Insights />
        <Architecture />
      </div>
    </div>
  );
}

export default App;