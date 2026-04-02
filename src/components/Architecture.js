import React, { useState } from "react";
import { motion } from "framer-motion";

const nodes = [
  { id: 1, name: "S3", x: 50, y: 150, desc: "Stores raw CSV data in bucket" },
  { id: 2, name: "Glue", x: 220, y: 80, desc: "Transforms CSV → Parquet" },
  { id: 3, name: "Lambda", x: 400, y: 150, desc: "Aggregates revenue & metrics" },
  { id: 4, name: "Bedrock", x: 580, y: 80, desc: "Generates AI insights (LLM)" },
  { id: 5, name: "DynamoDB", x: 760, y: 150, desc: "Stores processed insights" },
  { id: 6, name: "API", x: 920, y: 80, desc: "Secure API endpoint" },
  { id: 7, name: "React", x: 1100, y: 150, desc: "Frontend dashboard UI" }
];

function Architecture() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-black p-6 rounded-2xl border border-gray-800 shadow-xl">

      <h2 className="text-2xl mb-6 font-semibold">
        ⚙️ Interactive System Architecture
      </h2>

      {/* 🔥 CANVAS */}
      <div className="overflow-auto cursor-grab">
        <svg width="1300" height="300">

          {/* 🔥 CONNECTIONS */}
          {nodes.slice(0, -1).map((node, i) => {
            const next = nodes[i + 1];

            const path = `
              M ${node.x} ${node.y}
              Q ${(node.x + next.x) / 2} ${node.y - 80}
              ${next.x} ${next.y}
            `;

            return (
              <g key={i}>

                {/* LINE */}
                <path
                  d={path}
                  stroke="#374151"
                  strokeWidth="2"
                  fill="transparent"
                />

                {/* 🔥 FLOW DOT */}
                <motion.circle
                  r="4"
                  fill="#3b82f6"
                >
                  <animateMotion dur="2s" repeatCount="indefinite" path={path} />
                </motion.circle>

              </g>
            );
          })}

          {/* 🔥 NODES */}
          {nodes.map((node) => (
            <g key={node.id}>

              <foreignObject x={node.x - 50} y={node.y - 40} width="110" height="110">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setSelected(node)}
                  className="cursor-pointer bg-gray-800 border border-gray-700 rounded-xl p-4 text-center shadow-lg relative"
                >
                  <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg"></div>
                  <p className="text-sm font-semibold">{node.name}</p>
                </motion.div>
              </foreignObject>

            </g>
          ))}

        </svg>
      </div>

      {/* 🔥 DETAILS PANEL */}
      {selected && (
        <div className="mt-6 bg-gray-900 p-5 rounded-xl border border-gray-700 shadow-lg">
          <h3 className="text-lg font-semibold">{selected.name}</h3>
          <p className="text-gray-400 mt-2">{selected.desc}</p>

          <button
            onClick={() => setSelected(null)}
            className="mt-4 text-sm text-blue-400 hover:underline"
          >
            Close
          </button>
        </div>
      )}

      {/* 🔥 TECH STACK */}
      <div className="mt-6 flex flex-wrap gap-2">
        {["S3", "Glue", "Lambda", "Bedrock", "DynamoDB", "API Gateway", "React"].map((tech, i) => (
          <span
            key={i}
            className="bg-gray-800 px-3 py-1 text-sm rounded-full border border-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>

    </div>
  );
}

export default Architecture;