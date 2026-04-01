import React from "react";

function Architecture() {
  return (
    <div className="bg-gray-800 p-5 rounded-2xl shadow-lg">
      <h2 className="text-2xl mb-3">⚙️ Architecture</h2>

      <ul className="list-disc ml-5 text-gray-300">
        <li>📂 S3 stores data</li>
        <li>🔄 Glue processes data</li>
        <li>⚡ Lambda aggregates data</li>
        <li>🤖 Bedrock generates insights</li>
        <li>🗄️ DynamoDB stores results</li>
        <li>🌐 API Gateway exposes API</li>
        <li>🎨 React dashboard displays data</li>
      </ul>
    </div>
  );
}

export default Architecture;