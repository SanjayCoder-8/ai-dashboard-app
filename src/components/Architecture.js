import React from "react";

/* -------------------- AWS-STYLE SVG ICONS -------------------- */
const Icon = ({ type }) => {
  const common = "w-10 h-10 mx-auto mb-2";

  switch (type) {
    case "s3":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="#FF9900">
          <rect x="3" y="4" width="18" height="6" rx="2"/>
          <rect x="3" y="12" width="18" height="6" rx="2"/>
        </svg>
      );
    case "glue":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="#3b82f6">
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="6" r="3"/>
          <circle cx="18" cy="18" r="3"/>
          <line x1="8" y1="12" x2="15" y2="6" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="8" y1="12" x2="15" y2="18" stroke="#3b82f6" strokeWidth="2"/>
        </svg>
      );
    case "lambda":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="#f59e0b">
          <polygon points="4,20 10,4 14,4 20,20 16,20 12,10 8,20"/>
        </svg>
      );
    case "bedrock":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="#22c55e">
          <rect x="4" y="4" width="16" height="16" rx="3"/>
          <circle cx="9" cy="10" r="1.5"/>
          <circle cx="15" cy="10" r="1.5"/>
          <path d="M8 15c2 2 6 2 8 0" stroke="white" strokeWidth="1.5" fill="none"/>
        </svg>
      );
    case "dynamo":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="#6366f1">
          <ellipse cx="12" cy="6" rx="6" ry="3"/>
          <path d="M6 6v8c0 1.7 12 1.7 12 0V6" />
          <ellipse cx="12" cy="14" rx="6" ry="3"/>
        </svg>
      );
    case "api":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="#06b6d4">
          <rect x="3" y="6" width="18" height="12" rx="2"/>
          <path d="M7 12h10" stroke="white" strokeWidth="2"/>
        </svg>
      );
    case "react":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="#61dafb">
          <circle cx="12" cy="12" r="2"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61dafb"/>
          <ellipse cx="12" cy="12" rx="4" ry="10" fill="none" stroke="#61dafb"/>
        </svg>
      );
    default:
      return null;
  }
};

/* -------------------- FLOW DATA -------------------- */
const flow = [
  { name: "S3", type: "s3", desc: "Raw data storage (CSV)" },
  { name: "Glue", type: "glue", desc: "ETL → Parquet + Partitioning" },
  { name: "Lambda", type: "lambda", desc: "Aggregation + Metrics" },
  { name: "Bedrock", type: "bedrock", desc: "AI Insights generation" },
  { name: "DynamoDB", type: "dynamo", desc: "Stores analytics results" },
  { name: "API", type: "api", desc: "Exposes REST endpoint" },
  { name: "React", type: "react", desc: "Dashboard UI" },
];

function Architecture() {
  return (
    <div className="space-y-10">

      {/* 🔥 FLOW DIAGRAM WITH ANIMATION */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl mb-6">⚙️ System Architecture</h2>

        <div className="relative flex flex-wrap justify-center items-center gap-6">

          {flow.map((item, index) => (
            <div key={index} className="relative group text-center">

              {/* Card */}
              <div className="bg-gray-900 p-4 rounded-xl shadow-md hover:scale-105 transition">
                <Icon type={item.type} />
                <h3 className="font-semibold">{item.name}</h3>
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs p-2 rounded">
                {item.desc}
              </div>

              {/* Animated Arrow */}
              {index !== flow.length - 1 && (
                <svg width="60" height="20" className="mx-auto mt-2">
                  <line
                    x1="0"
                    y1="10"
                    x2="60"
                    y2="10"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                </svg>
              )}
            </div>
          ))}

        </div>
      </div>

      {/* 💼 TECH STACK */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl mb-6">💼 Tech Stack Used</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {flow.map((item, i) => (
            <div key={i} className="bg-gray-900 p-4 rounded-xl hover:scale-105 transition">
              <Icon type={item.type} />
              <p className="text-sm">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🧠 PROJECT EXPLANATION */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl mb-4">📖 Project Explanation</h2>

        <p className="text-gray-300 leading-relaxed">
          This project is an end-to-end AI-powered retail analytics platform built on AWS.
          Raw sales data is stored in S3 and processed using AWS Glue into optimized formats.
          AWS Lambda performs aggregations and computes key business metrics.
          Amazon Bedrock generates intelligent insights using large language models.
          The results are stored in DynamoDB and exposed via API Gateway.
          Finally, a React dashboard visualizes the data and insights interactively for users.
        </p>
      </div>

    </div>
  );
}

export default Architecture;