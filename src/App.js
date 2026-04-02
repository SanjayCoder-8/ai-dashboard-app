import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Insights from "./components/Insights";
import Architecture from "./components/Architecture";

function App() {
  const [open, setOpen] = useState(false);

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
          <p className="text-gray-400 hover:text-white cursor-pointer">Explanation</p>
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

          {/* DASHBOARD */}
          <Dashboard />

          {/* INSIGHTS */}
          <Insights />

          {/* ARCHITECTURE */}
          <Architecture />

          {/* 🔥 ACCORDION EXPLANATION */}
          <div className="bg-gray-900 rounded-2xl border border-gray-800 shadow-lg overflow-hidden">

            {/* HEADER */}
            <div
              onClick={() => setOpen(!open)}
              className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-800 transition"
            >
              <h2 className="text-2xl font-semibold text-blue-400">
                📘 System Architecture Explanation
              </h2>

              <span className="text-gray-400 text-xl">
                {open ? "−" : "+"}
              </span>
            </div>

            {/* CONTENT */}
            {open && (
              <div className="px-6 pb-6 border-t border-gray-800">
                <p className="text-gray-300 text-sm leading-relaxed mt-4">

                  This system follows an end-to-end data pipeline architecture for retail analytics and AI-driven insights.
                  <br /><br />

                  The pipeline begins with Amazon S3, where raw retail transaction data is stored in CSV format. This acts as the data lake layer.
                  <br /><br />

                  AWS Glue is used to perform ETL operations. It cleans, transforms, and converts the raw data into optimized formats like Parquet, making it suitable for analytics.
                  <br /><br />

                  AWS Lambda functions then process this transformed data to compute key business metrics such as total revenue, yearly sales trends, top-performing products, and country-wise performance.
                  <br /><br />

                  These aggregated insights are passed to Amazon Bedrock, where a large language model generates detailed AI-driven business insights and recommendations.
                  <br /><br />

                  The final structured results, including both computed metrics and AI-generated summaries, are stored in DynamoDB for fast and scalable access.
                  <br /><br />

                  Amazon API Gateway exposes this data securely through REST APIs, enabling external access with proper authorization.
                  <br /><br />

                  Finally, a React-based frontend dashboard consumes these APIs to visualize the data, display insights, and provide an interactive user experience.
                  <br /><br />

                  This architecture is scalable, serverless, and follows modern data engineering and MLOps practices.

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