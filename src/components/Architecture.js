import React, { useState } from "react";
import { TransformWrapper, TransformComponent, MiniMap } from "react-zoom-pan-pinch";
import Draggable from "react-draggable";

// ✅ AWS SVG ICONS PACKAGE
import S3Icon from "aws-svg-icons/lib/Storage/Arch_Amazon-S3_64.svg";
import LambdaIcon from "aws-svg-icons/lib/Compute/Arch_AWS-Lambda_64.svg";
import GlueIcon from "aws-svg-icons/lib/Analytics/Arch_AWS-Glue_64.svg";
import DynamoIcon from "aws-svg-icons/lib/Database/Arch_Amazon-DynamoDB_64.svg";
import ApiIcon from "aws-svg-icons/lib/ApplicationIntegration/Arch_Amazon-API-Gateway_64.svg";

// Fallback for Bedrock (not always present)
import AiIcon from "aws-svg-icons/lib/MachineLearning/Arch_Amazon-SageMaker_64.svg";

// React icon (external)
import ReactIcon from "react-icons/fa"; // optional fallback

const nodesData = [
  { id: 1, name: "S3", icon: S3Icon, x: 100, y: 120, desc: "Stores raw data" },
  { id: 2, name: "Glue", icon: GlueIcon, x: 300, y: 250, desc: "ETL processing" },
  { id: 3, name: "Lambda", icon: LambdaIcon, x: 500, y: 120, desc: "Aggregation logic" },
  { id: 4, name: "Bedrock", icon: AiIcon, x: 700, y: 250, desc: "AI insights generation" },
  { id: 5, name: "DynamoDB", icon: DynamoIcon, x: 900, y: 120, desc: "Stores results" },
  { id: 6, name: "API", icon: ApiIcon, x: 1100, y: 250, desc: "API layer" },
  { id: 7, name: "React", icon: null, x: 1300, y: 120, desc: "Frontend UI" }
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

      <h2 className="text-2xl text-center mb-4">
        ⚙️ System Design (AWS Interactive)
      </h2>

      {/* 🔊 Voice */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() =>
            speak("S3 stores data, Glue processes it, Lambda aggregates, Bedrock generates AI insights, DynamoDB stores results, API Gateway exposes data, and React shows dashboard.")
          }
          className="bg-blue-600 px-4 py-2 rounded"
        >
          🔊 Explain
        </button>
      </div>

      <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="flex gap-2 justify-center mb-3">
              <button onClick={zoomIn}>+</button>
              <button onClick={zoomOut}>-</button>
              <button onClick={resetTransform}>Reset</button>
            </div>

            <div className="flex justify-end">
              <MiniMap />
            </div>

            <TransformComponent>

              <div className="relative w-[1600px] h-[400px]">

                {/* CONNECTION LINES */}
                <svg className="absolute w-full h-full">
                  {nodesData.slice(0, -1).map((node, i) => {
                    const next = nodesData[i + 1];

                    return (
                      <line
                        key={i}
                        x1={node.x + 40}
                        y1={node.y + 40}
                        x2={next.x + 40}
                        y2={next.y + 40}
                        stroke="#4b5563"
                        strokeWidth="2"
                      />
                    );
                  })}
                </svg>

                {/* DRAGGABLE NODES */}
                {nodesData.map((node) => (
                  <Draggable key={node.id} defaultPosition={{ x: node.x, y: node.y }}>
                    <div
                      onClick={() => {
                        setSelected(node);
                        speak(node.desc);
                      }}
                      className="absolute bg-gray-800 p-4 rounded-xl border border-gray-700 text-center w-28 cursor-pointer"
                    >
                      {node.icon ? (
                        <img src={node.icon} alt="" className="w-10 h-10 mx-auto mb-2" />
                      ) : (
                        <div className="text-2xl">⚛️</div>
                      )}
                      <p>{node.name}</p>
                    </div>
                  </Draggable>
                ))}

              </div>

            </TransformComponent>
          </>
        )}
      </TransformWrapper>

      {/* DETAIL PANEL */}
      {selected && (
        <div className="mt-6 bg-gray-900 p-4 rounded-xl border border-gray-700 max-w-md mx-auto">
          <h3>{selected.name}</h3>
          <p className="text-gray-400">{selected.desc}</p>
        </div>
      )}

    </div>
  );
}

export default Architecture;