import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { motion } from "framer-motion";

// 🔥 CLEAN HORIZONTAL LAYOUT
const nodes = [
  { id: 1, name: "S3", color: "bg-orange-500", desc: "Stores raw data" },
  { id: 2, name: "Glue", color: "bg-blue-500", desc: "ETL processing" },
  { id: 3, name: "Lambda", color: "bg-yellow-400 text-black", desc: "Aggregation" },
  { id: 4, name: "Bedrock", color: "bg-green-500", desc: "AI insights" },
  { id: 5, name: "DynamoDB", color: "bg-indigo-500", desc: "Stores results" },
  { id: 6, name: "API", color: "bg-cyan-500", desc: "API Gateway" },
  { id: 7, name: "React", color: "bg-sky-400 text-black", desc: "Frontend" }
];

function Architecture() {
  const [selected, setSelected] = useState(null);

  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="bg-black p-6 rounded-2xl border border-gray-800">

      <h2 className="text-2xl text-center mb-6 font-semibold">
        ⚙️ System Design
      </h2>

      {/* 🔊 Voice */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() =>
            speak("S3 to Glue to Lambda to Bedrock to DynamoDB to API to React")
          }
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          🔊 Explain
        </button>
      </div>

      <TransformWrapper
        initialScale={1}
        minScale={0.7}
        maxScale={2}
        centerOnInit
        wheel={{ step: 0.1 }}
      >
        <TransformComponent>

          <div className="w-full flex justify-center">

            {/* 🔥 MAIN FLOW */}
            <div className="flex items-center gap-10 py-10">

              {nodes.map((node, index) => (
                <React.Fragment key={node.id}>

                  {/* NODE */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      setSelected(node);
                      speak(node.desc);
                    }}
                    className="cursor-pointer"
                  >
                    <div className="bg-gray-900 px-5 py-6 rounded-2xl border border-gray-700 shadow-lg text-center w-28 hover:shadow-blue-500/30 transition">

                      {/* ICON */}
                      <div className={`w-12 h-12 mx-auto mb-2 flex items-center justify-center rounded-xl ${node.color}`}>
                        {node.name === "Lambda" ? "λ" : node.name === "Bedrock" ? "AI" : node.name.slice(0,2)}
                      </div>

                      <p className="text-sm">{node.name}</p>
                    </div>
                  </motion.div>

                  {/* 🔗 CONNECTOR */}
                  {index !== nodes.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: index * 0.2 }}
                      className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded"
                    />
                  )}

                </React.Fragment>
              ))}

            </div>

          </div>

        </TransformComponent>
      </TransformWrapper>

      {/* 🔥 DETAIL PANEL */}
      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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