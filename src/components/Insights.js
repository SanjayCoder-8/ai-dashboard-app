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
    <div className="bg-gray-800 p-5 rounded-2xl shadow-lg">
      <h2 className="text-2xl mb-3">🤖 AI Insights</h2>

      {/* 🔥 Markdown Rendering */}
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown>{summary}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Insights;