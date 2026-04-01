import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import "chart.js/auto";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://ph4jwluqme.execute-api.ap-south-1.amazonaws.com/get-insights?id=retail-summary")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  // 🔹 Extract data
  const yearlySales = data.yearly_sales;
  const topProducts = data.top_products;
  const countrySales = data.country_sales;

  // 🔹 Yearly Revenue Chart
  const yearlyChart = {
    labels: Object.keys(yearlySales),
    datasets: [
      {
        label: "Yearly Revenue",
        data: Object.values(yearlySales),
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f6",
        tension: 0.4,
      },
    ],
  };

  // 🔹 Top Products Chart
  const productChart = {
    labels: Object.keys(topProducts),
    datasets: [
      {
        label: "Top Products Revenue",
        data: Object.values(topProducts),
        backgroundColor: "#22c55e",
      },
    ],
  };

  // 🔹 Country Sales Chart
  const countryChart = {
    labels: Object.keys(countrySales),
    datasets: [
      {
        label: "Country Revenue",
        data: Object.values(countrySales),
        backgroundColor: "#f59e0b",
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* 🔹 Revenue Card */}
      <div className="bg-gray-800 p-5 rounded-2xl shadow-lg">
        <h2 className="text-2xl mb-4">📊 Dashboard</h2>

        <h3 className="text-xl mb-4 text-green-400">
          💰 Total Revenue: {data.total_revenue}
        </h3>

        <Line data={yearlyChart} />
      </div>

      {/* 🔹 Top Products */}
      <div className="bg-gray-800 p-5 rounded-2xl shadow-lg">
        <h2 className="text-xl mb-3">🏆 Top Products</h2>
        <Bar data={productChart} />
      </div>

      {/* 🔹 Country Sales */}
      <div className="bg-gray-800 p-5 rounded-2xl shadow-lg">
        <h2 className="text-xl mb-3">🌍 Country Sales</h2>
        <Bar data={countryChart} />
      </div>
    </div>
  );
}

export default Dashboard;