import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { motion } from "framer-motion";

// 🔥 NODE DATA (ALIGNED)
const nodes = [
  { id: 1, name: "S3", x: 100, y: 200, color: "bg-orange-500", desc: "Stores raw data" },
  { id: 2, name: "Glue", x: 300, y: 200, color: "bg-blue-500", desc: "ETL processing" },
  { id: 3, name: "Lambda", x: 500, y: 200, color: "bg-yellow-400 text-black", desc: "Aggregation logic" },
  { id: 4, name: "Bedrock", x: 700, y: 200, color: "bg-green-500", desc: "AI insights generation" },
  { id: 5, name: "DynamoDB", x: 900, y: 200, color: "bg-indigo-500", desc: "Stores results" },
  { id: 6, name: "API", x: 1100, y: 200, color: "bg-cyan-500", desc: "API Gateway" },
  { id: 7, name: "React", x: 1300, y: 200, color: "bg-sky-400 text-black", desc: "Frontend UI" }
];

function Architecture() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-black p-6 rounded-2xl border border-gray-800">

      <h2 className="text-2xl text-center mb-6 font-semibold tracking-wide">
        ⚙️ System Design (Premium)
      </h2>

      <TransformWrapper>
        <TransformComponent>

          <div className="relative w-[1500px] h-[400px]">

            {/* 🔥 CURVED ANIMATED LINES */}
            <svg className="absolute w-full h-full">
              {nodes.slice(0, -1).map((node, i) => {
                const next = nodes[i + 1];

                return (
                  <motion.path
                    key={i}
                    d={`M ${node.x + 60} ${node.y + 40} 
                        C ${(node.x + next.x) / 2} ${node.y - 50},
                          ${(node.x + next.x) / 2} ${next.y + 100},
                          ${next.x + 60} ${next.y + 40}`}
                    stroke="#3b82f6"
                    strokeWidth="2"
                    fill="transparent"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: i * 0.2 }}
                  />
                );
              })}
            </svg>

            {/* 🔥 NODES */}
            {nodes.map((node) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: node.id * 0.2 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setSelected(node)}
                className="absolute cursor-pointer"
                style={{ left: node.x, top: node.y }}
              >
                <div className="bg-gray-900 p-5 rounded-2xl border border-gray-700 shadow-lg hover:shadow-blue-500/30 transition">

                  {/* ICON */}
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${node.color} mb-3 font-bold`}>
                    {node.name === "Lambda" ? "λ" : node.name === "Bedrock" ? "AI" : node.name.slice(0,2)}
                  </div>

                  <p className="text-sm font-medium text-center">{node.name}</p>

                </div>
              </motion.div>
            ))}

          </div>

        </TransformComponent>
      </TransformWrapper>

      {/* 🔥 DETAIL PANEL */}
      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 bg-gray-900 p-5 rounded-xl border border-gray-700 max-w-md mx-auto shadow-lg"
        >
          <h3 className="text-lg font-semibold">{selected.name}</h3>
          <p className="text-gray-400 mt-2 text-sm">{selected.desc}</p>

          <button
            onClick={() => setSelected(null)}
            className="mt-4 text-blue-400 text-sm"
          >
            Close
          </button>
        </motion.div>
      )}

    </div>
  );
}

export default Architecture;