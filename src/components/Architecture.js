import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { motion } from "framer-motion";

// 🔥 NODES
const nodes = [
  { id: 1, name: "S3", x: 100, color: "bg-orange-500", desc: "Stores raw data" },
  { id: 2, name: "Glue", x: 300, color: "bg-blue-500", desc: "ETL processing" },
  { id: 3, name: "Lambda", x: 500, color: "bg-yellow-400 text-black", desc: "Aggregation logic" },
  { id: 4, name: "Bedrock", x: 700, color: "bg-green-500", desc: "AI insights" },
  { id: 5, name: "DynamoDB", x: 900, color: "bg-indigo-500", desc: "Stores results" },
  { id: 6, name: "API", x: 1100, color: "bg-cyan-500", desc: "API Gateway" },
  { id: 7, name: "React", x: 1300, color: "bg-sky-400 text-black", desc: "Frontend UI" }
];

function Architecture() {
  const [selected, setSelected] = useState(null);

  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="bg-black p-6 rounded-2xl border border-gray-800 overflow-hidden">

      <h2 className="text-2xl text-center mb-6 font-semibold">
        ⚙️ System Design (Elite UI)
      </h2>

      {/* 🔊 VOICE */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() =>
            speak("S3 to Glue to Lambda to Bedrock to DynamoDB to API to React")
          }
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          🔊 Explain Flow
        </button>
      </div>

      <TransformWrapper>
        <TransformComponent>

          <div className="relative w-[1500px] h-[350px]">

            {/* 🔥 ANIMATED CONNECTIONS */}
            <svg className="absolute w-full h-full">

              <defs>
                <linearGradient id="flowGradient">
                  <stop offset="0%" stopColor="#3b82f6">
                    <animate attributeName="offset" values="0;1" dur="2s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#9333ea" />
                </linearGradient>
              </defs>

              {nodes.slice(0, -1).map((node, i) => {
                const next = nodes[i + 1];

                const path = `M ${node.x + 60} 180 
                              C ${(node.x + next.x) / 2} 80,
                                ${(node.x + next.x) / 2} 280,
                                ${next.x + 60} 180`;

                return (
                  <g key={i}>
                    {/* Base path */}
                    <path
                      d={path}
                      stroke="#1f2937"
                      strokeWidth="3"
                      fill="none"
                    />

                    {/* Animated glowing path */}
                    <motion.path
                      d={path}
                      stroke="url(#flowGradient)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: i * 0.3 }}
                    />

                    {/* 🔥 MOVING DOT (DATA FLOW) */}
                    <motion.circle
                      r="5"
                      fill="#3b82f6"
                      initial={{ offsetDistance: "0%" }}
                      animate={{ offsetDistance: "100%" }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.4
                      }}
                      style={{
                        offsetPath: `path('${path}')`
                      }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* 🔥 NODES */}
            {nodes.map((node) => (
              <motion.div
                key={node.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: node.id * 0.2 }}
                whileHover={{ scale: 1.15 }}
                onClick={() => {
                  setSelected(node);
                  speak(node.desc);
                }}
                className="absolute cursor-pointer"
                style={{ left: node.x, top: 140 }}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0px 0px 10px rgba(59,130,246,0.2)",
                      "0px 0px 25px rgba(59,130,246,0.6)",
                      "0px 0px 10px rgba(59,130,246,0.2)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gray-900 p-5 rounded-2xl border border-gray-700 text-center w-28"
                >
                  <div className={`w-12 h-12 mx-auto mb-2 flex items-center justify-center rounded-xl ${node.color}`}>
                    {node.name === "Lambda" ? "λ" : node.name === "Bedrock" ? "AI" : node.name.slice(0,2)}
                  </div>

                  <p className="text-sm">{node.name}</p>
                </motion.div>
              </motion.div>
            ))}

          </div>

        </TransformComponent>
      </TransformWrapper>

      {/* 🔥 DETAIL PANEL */}
      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 bg-gray-900 p-5 rounded-xl border border-gray-700 max-w-md mx-auto"
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