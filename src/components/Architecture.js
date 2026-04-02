import React, { useState } from "react";
import { TransformWrapper, TransformComponent, MiniMap } from "react-zoom-pan-pinch";
import Draggable from "react-draggable";

// 🔥 AWS-STYLE ICON COMPONENTS (PURE REACT)
const Icon = ({ type }) => {
  const base = "w-10 h-10 flex items-center justify-center rounded-lg text-white text-lg font-bold";

  const styles = {
    S3: "bg-orange-500",
    Glue: "bg-blue-500",
    Lambda: "bg-yellow-500 text-black",
    Bedrock: "bg-green-500",
    DynamoDB: "bg-indigo-500",
    API: "bg-cyan-500",
    React: "bg-sky-400 text-black"
  };

  return (
    <div className={`${base} ${styles[type]}`}>
      {type === "S3" && "S3"}
      {type === "Glue" && "G"}
      {type === "Lambda" && "λ"}
      {type === "Bedrock" && "AI"}
      {type === "DynamoDB" && "DB"}
      {type === "API" && "API"}
      {type === "React" && "⚛"}
    </div>
  );
};

// 🔥 NODE DATA
const nodesData = [
  { id: 1, name: "S3", x: 100, y: 120, desc: "Stores raw retail data in S3 bucket" },
  { id: 2, name: "Glue", x: 300, y: 260, desc: "Transforms CSV into Parquet format" },
  { id: 3, name: "Lambda", x: 500, y: 120, desc: "Aggregates revenue and metrics" },
  { id: 4, name: "Bedrock", x: 700, y: 260, desc: "Generates AI insights using LLM" },
  { id: 5, name: "DynamoDB", x: 900, y: 120, desc: "Stores processed insights" },
  { id: 6, name: "API", x: 1100, y: 260, desc: "Exposes secure API endpoint" },
  { id: 7, name: "React", x: 1300, y: 120, desc: "Frontend dashboard UI" }
];

function Architecture() {
  const [selected, setSelected] = useState(null);

  // 🔊 VOICE
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="bg-black p-6 rounded-2xl border border-gray-800">

      <h2 className="text-2xl text-center mb-4">
        ⚙️ Interactive System Design (FINAL)
      </h2>

      {/* 🔊 GLOBAL EXPLAIN */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() =>
            speak(
              "This system uses S3 for storage, Glue and Lambda for processing, Bedrock for AI insights, DynamoDB for storage, API Gateway for access, and React for visualization."
            )
          }
          className="bg-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
        >
          🔊 Explain Architecture
        </button>
      </div>

      <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* 🔥 CONTROLS */}
            <div className="flex gap-2 justify-center mb-3">
              <button onClick={zoomIn} className="bg-gray-800 px-3 py-1 rounded">+</button>
              <button onClick={zoomOut} className="bg-gray-800 px-3 py-1 rounded">-</button>
              <button onClick={resetTransform} className="bg-gray-800 px-3 py-1 rounded">Reset</button>
            </div>

            {/* 🔥 MINI MAP */}
            <div className="flex justify-end mb-2">
              <div className="w-40 h-24 border border-gray-700 rounded">
                <MiniMap />
              </div>
            </div>

            <TransformComponent>

              <div className="relative w-[1600px] h-[450px]">

                {/* 🔗 CONNECTION LINES */}
                <svg className="absolute w-full h-full">
                  {nodesData.slice(0, -1).map((node, i) => {
                    const next = nodesData[i + 1];

                    return (
                      <line
                        key={i}
                        x1={node.x + 50}
                        y1={node.y + 50}
                        x2={next.x + 50}
                        y2={next.y + 50}
                        stroke="#4b5563"
                        strokeWidth="2"
                      />
                    );
                  })}
                </svg>

                {/* 🔥 DRAGGABLE NODES */}
                {nodesData.map((node) => (
                  <Draggable key={node.id} defaultPosition={{ x: node.x, y: node.y }}>
                    <div
                      onClick={() => {
                        setSelected(node);
                        speak(node.desc);
                      }}
                      className="absolute cursor-pointer bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-lg text-center w-28 hover:border-blue-400 transition"
                    >
                      <Icon type={node.name} />
                      <p className="text-sm mt-2 font-semibold">{node.name}</p>
                    </div>
                  </Draggable>
                ))}

              </div>

            </TransformComponent>
          </>
        )}
      </TransformWrapper>

      {/* 🔥 DETAIL PANEL */}
      {selected && (
        <div className="mt-6 bg-gray-900 p-4 rounded-xl border border-gray-700 max-w-md mx-auto">
          <h3 className="font-semibold text-lg">{selected.name}</h3>
          <p className="text-gray-400 text-sm mt-2">{selected.desc}</p>

          <button
            onClick={() => setSelected(null)}
            className="mt-3 text-blue-400 text-sm"
          >
            Close
          </button>
        </div>
      )}

    </div>
  );
}

export default Architecture;