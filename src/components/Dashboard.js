import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://ph4jwluqme.execute-api.ap-south-1.amazonaws.com/get-insights?id=retail-summary")
      .then((res) => setData(res.data));
  }, []);

  if (!data) return <p>Loading...</p>;

  const yearlySales = data.yearly_sales;

  const chartData = {
    labels: Object.keys(yearlySales),
    datasets: [
      {
        label: "Revenue",
        data: Object.values(yearlySales),
        borderColor: "#3b82f6",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-5 rounded-2xl shadow-lg">
      <h2 className="text-2xl mb-4">📊 Dashboard</h2>

      <h3 className="text-xl mb-4 text-green-400">
        💰 Revenue: {data.total_revenue}
      </h3>

      <Line data={chartData} />
    </div>
  );
}

export default Dashboard;