import React from "react";

const flow = [
  { name: "S3", desc: "Raw Data Storage" },
  { name: "Glue", desc: "ETL Processing" },
  { name: "Lambda", desc: "Aggregation" },
  { name: "Bedrock", desc: "AI Insights" },
  { name: "DynamoDB", desc: "Storage" },
  { name: "API Gateway", desc: "API Layer" },
  { name: "React", desc: "Frontend UI" },
];

function Architecture() {
  return (
    <div className="space-y-8">

      {/* 🔹 Architecture Title */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl mb-6 flex items-center gap-2">
          ⚙️ System Architecture
        </h2>

        {/* 🔥 Flow Diagram */}
        <div className="flex flex-wrap items-center justify-center gap-4">

          {flow.map((item, index) => (
            <React.Fragment key={index}>
              
              <div className="bg-gray-900 px-4 py-3 rounded-xl shadow-md text-center hover:scale-105 transition">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>

              {/* Arrow */}
              {index !== flow.length - 1 && (
                <div className="text-blue-400 text-xl animate-pulse">
                  →
                </div>
              )}

            </React.Fragment>
          ))}

        </div>
      </div>

      {/* 🔹 Tech Stack Section */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl mb-6">💼 Tech Stack Used</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-gray-900 p-4 rounded-xl text-center">
            <h3 className="font-semibold">AWS S3</h3>
            <p className="text-xs text-gray-400">Storage</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl text-center">
            <h3 className="font-semibold">AWS Glue</h3>
            <p className="text-xs text-gray-400">ETL</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl text-center">
            <h3 className="font-semibold">Lambda</h3>
            <p className="text-xs text-gray-400">Compute</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl text-center">
            <h3 className="font-semibold">Bedrock</h3>
            <p className="text-xs text-gray-400">AI/LLM</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl text-center">
            <h3 className="font-semibold">DynamoDB</h3>
            <p className="text-xs text-gray-400">NoSQL DB</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl text-center">
            <h3 className="font-semibold">API Gateway</h3>
            <p className="text-xs text-gray-400">API Layer</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl text-center">
            <h3 className="font-semibold">React</h3>
            <p className="text-xs text-gray-400">Frontend</p>
          </div>

          <div className="bg-gray-900 p-4 rounded-xl text-center">
            <h3 className="font-semibold">Chart.js</h3>
            <p className="text-xs text-gray-400">Visualization</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Architecture;