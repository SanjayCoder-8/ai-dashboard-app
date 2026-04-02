import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Insights() {
  const [summary, setSummary] = useState("");

  useEffect(() => {
    axios.get(
      "https://ph4jwluqme.execute-api.ap-south-1.amazonaws.com/get-insights?id=retail-summary",
      {
        headers: {
          Authorization: "Bearer my-secret-token"
        }
      }
    )
    .then((res) => setSummary(res.data.ai_summary))
    .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow border border-gray-700">
      <h2 className="text-xl mb-4">🤖 AI Insights</h2>

      <div className="prose prose-invert max-w-none">
        <ReactMarkdown>{summary}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Insights;