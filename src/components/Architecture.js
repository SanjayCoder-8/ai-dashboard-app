import React, { useState } from "react";
import { motion } from "framer-motion";

const layers = [
  {
    title: "Data Layer",
    nodes: [
      { name: "S3", desc: "Stores raw retail CSV data" }
    ]
  },
  {
    title: "Processing Layer",
    nodes: [
      { name: "Glue", desc: "Transforms data into Parquet format" },
      { name: "Lambda", desc: "Aggregates revenue and metrics" }
    ]
  },
  {
    title: "AI Layer",
    nodes: [
      { name: "Bedrock", desc: "Generates AI-based insights" }
    ]
  },
  {
    title: "Serving Layer",
    nodes: [
      { name: "DynamoDB", desc: "Stores processed insights" },
      { name: "API Gateway", desc: "Provides secure API access" }
    ]
  },
  {
    title: "Frontend Layer",
    nodes: [
      { name: "React", desc: "Displays dashboard & insights" }
    ]
  }
];

function Architecture() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-black p-6 rounded-2xl border border-gray-800 shadow-xl">

      <h2 className="text-2xl mb-6 font-semibold">
        ⚙️ System Design Architecture
      </h2>

      {/* 🔥 LAYERS */}
      <div className="space-y-8">

        {layers.map((layer, index) => (
          <div key={index}>

            {/* 🔹 Layer Title */}
            <h3 className="text-lg text-blue-400 mb-3">
              {layer.title}
            </h3>

            {/* 🔹 Nodes */}
            <div className="flex flex-wrap gap-6 items-center">

              {layer.nodes.map((node, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setSelected(node)}
                  className="cursor-pointer bg-gray-800 px-6 py-4 rounded-xl border border-gray-700 shadow-lg"
                >
                  <p className="font-semibold">{node.name}</p>
                </motion.div>
              ))}

            </div>

            {/* 🔥 FLOW LINE */}
            {index !== layers.length - 1 && (
              <div className="flex justify-center mt-4">

                <motion.div
                  className="w-1 h-10 bg-blue-500"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />

              </div>
            )}

          </div>
        ))}

      </div>

      {/* 🔥 DETAIL PANEL */}
      {selected && (
        <div className="mt-8 bg-gray-900 p-5 rounded-xl border border-gray-700 shadow-lg">
          <h3 className="text-lg font-semibold">{selected.name}</h3>
          <p className="text-gray-400 mt-2">{selected.desc}</p>

          <button
            onClick={() => setSelected(null)}
            className="mt-4 text-blue-400 text-sm hover:underline"
          >
            Close
          </button>
        </div>
      )}

      {/* 🔥 SUMMARY */}
      <div className="mt-8 text-gray-400 text-sm leading-relaxed">
        This architecture demonstrates a layered AI data pipeline where raw data
        flows through ETL processing, AI analysis, and is served via scalable APIs
        to a frontend dashboard.
      </div>

    </div>
  );
}

export default Architecture;