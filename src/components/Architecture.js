import React, { useState } from "react";
import { motion } from "framer-motion";

const layers = [
  {
    title: "Data Layer",
    nodes: [{ name: "S3", desc: "Stores raw retail data" }]
  },
  {
    title: "Processing Layer",
    nodes: [
      { name: "Glue", desc: "ETL transformation" },
      { name: "Lambda", desc: "Aggregation logic" }
    ]
  },
  {
    title: "AI Layer",
    nodes: [{ name: "Bedrock", desc: "LLM insights generation" }]
  },
  {
    title: "Serving Layer",
    nodes: [
      { name: "DynamoDB", desc: "Stores results" },
      { name: "API Gateway", desc: "Exposes API" }
    ]
  },
  {
    title: "Frontend Layer",
    nodes: [{ name: "React", desc: "Dashboard UI" }]
  }
];

function Architecture() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-gradient-to-br from-gray-950 to-black p-8 rounded-2xl border border-gray-800 shadow-xl">

      <h2 className="text-2xl mb-10 font-semibold text-center">
        ⚙️ System Design Architecture
      </h2>

      {/* 🔥 CENTERED FLOW */}
      <div className="flex flex-col items-center space-y-10">

        {layers.map((layer, index) => (
          <div key={index} className="flex flex-col items-center">

            {/* 🔹 Layer Title */}
            <h3 className="text-blue-400 mb-4 text-sm tracking-wide uppercase">
              {layer.title}
            </h3>

            {/* 🔹 Nodes */}
            <div className="flex gap-6 flex-wrap justify-center">

              {layer.nodes.map((node, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  onClick={() => setSelected(node)}
                  className="cursor-pointer bg-gray-800 px-6 py-4 rounded-xl border border-gray-700 shadow-lg hover:border-blue-400 transition relative"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-10 blur-xl rounded-xl"></div>

                  <p className="font-semibold text-center">{node.name}</p>
                </motion.div>
              ))}

            </div>

            {/* 🔥 FLOW ARROW */}
            {index !== layers.length - 1 && (
              <motion.div
                className="flex flex-col items-center mt-6"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <div className="w-[2px] h-10 bg-blue-500"></div>
                <div className="w-3 h-3 border-b-2 border-r-2 border-blue-500 rotate-45 -mt-1"></div>
              </motion.div>
            )}

          </div>
        ))}

      </div>

      {/* 🔥 DETAIL PANEL */}
      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 bg-gray-900 p-5 rounded-xl border border-gray-700 shadow-lg max-w-md mx-auto"
        >
          <h3 className="text-lg font-semibold">{selected.name}</h3>
          <p className="text-gray-400 mt-2">{selected.desc}</p>

          <button
            onClick={() => setSelected(null)}
            className="mt-4 text-blue-400 text-sm hover:underline"
          >
            Close
          </button>
        </motion.div>
      )}

      {/* 🔥 FOOTER DESCRIPTION */}
      <div className="mt-10 text-center text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
        This system follows a layered architecture where data flows from storage,
        through processing and AI analysis, into a serving layer, and finally to
        a user-facing dashboard.
      </div>

    </div>
  );
}

export default Architecture;