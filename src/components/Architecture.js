import React, { useState, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { motion } from "framer-motion";

// 🔥 DATA
const nodes = [
  { id: 1, name: "S3", color: "bg-orange-500", desc: "Stores raw data" },
  { id: 2, name: "Glue", color: "bg-blue-500", desc: "ETL processing" },
  { id: 3, name: "Lambda", color: "bg-yellow-400 text-black", desc: "Aggregation logic" },
  { id: 4, name: "Bedrock", color: "bg-green-500", desc: "AI insights generation" },
  { id: 5, name: "DynamoDB", color: "bg-indigo-500", desc: "Stores processed data" },
  { id: 6, name: "API", color: "bg-cyan-500", desc: "API Gateway layer" },
  { id: 7, name: "React", color: "bg-sky-400 text-black", desc: "Frontend dashboard" }
];

function Architecture() {
  const [selected, setSelected] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  // 🔥 STEP FLOW (only highlight, no animation)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % nodes.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // 🔊 VOICE
  const speakFull = () => {
    const speech = new SpeechSynthesisUtterance(`
      This system follows an end-to-end data pipeline architecture.
      Data flows from S3 to Glue to Lambda to Bedrock to DynamoDB to API and finally to React dashboard.
    `);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  const speakNode = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="bg-black p-6 rounded-2xl border border-gray-800 overflow-hidden">

      {/* TITLE */}
      <h2 className="text-2xl text-center mb-6 font-semibold">
        ⚙️ System Design
      </h2>

      {/* VOICE */}
      <div className="flex justify-center mb-6">
        <button
          onClick={speakFull}
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          🔊 Explain
        </button>
      </div>

      {/* ZOOM */}
      <TransformWrapper
        initialScale={1}
        minScale={0.8}
        maxScale={1.5}
        centerOnInit
        doubleClick={{ disabled: true }}
        panning={{ velocityDisabled: true }}
      >
        <TransformComponent>

          <div className="w-[1200px] mx-auto">

            <div className="flex items-center justify-between py-10">

              {nodes.map((node, index) => (
                <React.Fragment key={node.id}>

                  {/* NODE */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => {
                      setSelected(node);
                      speakNode(node.desc);
                    }}
                    className="cursor-pointer"
                  >
                    <div
                      className={`bg-gray-900 px-5 py-6 rounded-2xl border border-gray-700 shadow-lg text-center w-28 transition
                      ${activeStep === index ? "ring-2 ring-blue-400 shadow-blue-500/40" : ""}`}
                    >

                      <div className={`w-12 h-12 mx-auto mb-2 flex items-center justify-center rounded-xl ${node.color}`}>
                        {node.name === "Lambda"
                          ? "λ"
                          : node.name === "Bedrock"
                          ? "AI"
                          : node.name.slice(0, 2)}
                      </div>

                      <p className="text-sm font-medium">{node.name}</p>
                    </div>
                  </motion.div>

                  {/* 🔥 CLEAN CONNECTOR (NO ANIMATION) */}
                  {index !== nodes.length - 1 && (
                    <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                  )}

                </React.Fragment>
              ))}

            </div>

          </div>

        </TransformComponent>
      </TransformWrapper>

      {/* DETAIL PANEL */}
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