import React from "react";

function DataLinks() {
  return (
    <div className="bg-gray-800 p-5 rounded-2xl shadow-lg">
      <h2 className="text-2xl mb-3">📂 Data Access</h2>

      <div className="flex gap-4">
        <a
          href="https://your-bucket.s3.amazonaws.com/raw-data/file.csv"
          className="bg-blue-600 px-4 py-2 rounded-lg"
        >
          Download CSV
        </a>

        <a
          href="https://your-bucket.s3.amazonaws.com/processed-data/"
          className="bg-green-600 px-4 py-2 rounded-lg"
        >
          Download Parquet
        </a>
      </div>
    </div>
  );
}

export default DataLinks;