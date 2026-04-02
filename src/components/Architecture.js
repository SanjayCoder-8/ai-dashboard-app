import React, { useState } from "react";
import { TransformWrapper, TransformComponent, MiniMap } from "react-zoom-pan-pinch";
import Draggable from "react-draggable";

// 🔥 AWS ICONS (keep in /assets/aws/)
import s3 from "../assets/aws/s3.svg";
import glue from "../assets/aws/glue.svg";
import lambda from "../assets/aws/lambda.svg";
import dynamodb from "../assets/aws/dynamodb.svg";
import api from "../assets/aws/api.svg";
import reactIcon from "../assets/aws/react.svg";
import bedrock from "../assets/aws/bedrock.svg";

const nodesData = [
  { id: 1, name: "S3", icon: s3, x: 100, y: 120, desc: "Stores raw retail data in S3 bucket" },
  { id: 2, name: "Glue", icon: glue, x: 300, y: 250, desc: "Transforms CSV → Parquet" },
  { id: 3, name: "Lambda", icon: lambda, x: 500, y: 120, desc: "Aggregates metrics & revenue" },
  { id: 4, name: "Bedrock", icon: bedrock, x: 700, y: 250, desc: "Generates AI insights using LLM" },
  { id: 5, name: "DynamoDB", icon: dynamodb, x: 900, y: 120, desc: "Stores processed insights" },
  { id: 6, name: "API", icon: api, x: 1100, y: 250, desc: "Exposes secure API endpoint" },
  { id: 7, name: "React", icon: reactIcon, x: 1300, y: 120, desc: "Frontend dashboard UI" }
];

function Architecture() {
  const [selected, setSelected] = useState(null);

  // 🔥 Voice Explanation
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.cancel(); // stop previous
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="bg-black p-6 rounded-2xl border border-gray-800">

      <h2 className="text-2xl text-center mb-4">
        ⚙️ Interactive System Design (FAANG Level)
      </h2>

      {/* 🔥 GLOBAL VOICE BUTTON */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() =>
            speak(
              "This system uses S3 for storage, Glue and Lambda for processing, Bedrock for AI insights, DynamoDB for storage, API Gateway for access, and React for visualization."
            )
          }
          className="bg-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
        >
          🔊 Explain Full Architecture
        </button>
      </div>

      <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* 🔥 CONTROLS */}
            <div className="flex gap-3 justify-center mb-3">
              <button onClick={zoomIn} className="bg-gray-800 px-3 py-1 rounded">+</button>
              <button onClick={zoomOut} className="bg-gray-800 px-3 py-1 rounded">-</button>
              <button onClick={resetTransform} className="bg-gray-800 px-3 py-1 rounded">Reset</button>
            </div>

            {/* 🔥 MINI MAP */}
            <div className="flex justify-end mb-2">
              <div className="w-40 h-24 border border-gray-700">
                <MiniMap />
              </div>
            </div>

            <TransformComponent>

              <div className="relative w-[1600px] h-[450px]">

                {/* 🔥 CONNECTION LINES */}
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
                        speak(node.desc); // 🔥 speak on click
                      }}
                      className="absolute cursor-pointer bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-lg text-center w-28 hover:border-blue-400 transition"
                    >
                      <img src={node.icon} alt="" className="w-10 h-10 mx-auto mb-2" />
                      <p className="text-sm font-semibold">{node.name}</p>
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