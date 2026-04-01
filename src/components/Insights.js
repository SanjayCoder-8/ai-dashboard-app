import React, { useEffect, useState } from "react";
import axios from "axios";

function Insights() {
  const [summary, setSummary] = useState("");

  useEffect(() => {
    axios
      .get("https://ph4jwluqme.execute-api.ap-south-1.amazonaws.com/get-insights?id=retail-summary")
      .then((res) => setSummary(res.data.ai_summary));
  }, []);

  return (
    <div className="bg-gray-800 p-5 rounded-2xl shadow-lg">
      <h2 className="text-2xl mb-3">🤖 AI Insights</h2>
      <p className="text-gray-300">{summary}</p>
    </div>
  );
}

export default Insights;