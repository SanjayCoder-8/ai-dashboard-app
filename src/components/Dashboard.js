import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import "chart.js/auto";

const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      labels: { color: "#9ca3af", font: { size: 11 }, boxWidth: 12 },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#9ca3af",
        font: { size: 10 },
        maxRotation: 30,
        autoSkip: true,
        maxTicksLimit: 6,
      },
      grid: { color: "#1f2937" },
    },
    y: {
      ticks: {
        color: "#9ca3af",
        font: { size: 10 },
        callback: (v) =>
          v >= 1000000 ? (v / 1000000).toFixed(1) + "M" : v >= 1000 ? (v / 1000).toFixed(0) + "K" : v,
      },
      grid: { color: "#1f2937" },
    },
  },
};

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://ph4jwluqme.execute-api.ap-south-1.amazonaws.com/get-insights?id=retail-summary",
        { headers: { Authorization: "Bearer my-secret-token" } }
      )
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data)
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-gray-400 text-sm animate-pulse">Loading data...</div>
      </div>
    );

  const yearlySales = data.yearly_sales;
  const topProducts = data.top_products;
  const countrySales = data.country_sales;

  const yearlyChart = {
    labels: Object.keys(yearlySales),
    datasets: [{
      label: "Yearly Revenue",
      data: Object.values(yearlySales),
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59,130,246,0.1)",
      tension: 0.4,
      fill: true,
      pointRadius: 3,
    }],
  };

  const productChart = {
    labels: Object.keys(topProducts).map((k) => k.length > 12 ? k.slice(0, 12) + "…" : k),
    datasets: [{
      label: "Top Products",
      data: Object.values(topProducts),
      backgroundColor: "#22c55e",
      borderRadius: 4,
    }],
  };

  const countryChart = {
    labels: Object.keys(countrySales),
    datasets: [{
      label: "Country Sales",
      data: Object.values(countrySales),
      backgroundColor: "#f59e0b",
      borderRadius: 4,
    }],
  };

  return (
    <div className="space-y-4 md:space-y-6">

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">

        <div className="bg-gray-800 p-4 md:p-5 rounded-xl shadow border border-gray-700">
          <p className="text-gray-400 text-xs md:text-sm">Total Revenue</p>
          <h2 className="text-xl md:text-2xl font-bold text-green-400 mt-1 break-all">
            ₹{data.total_revenue}
          </h2>
        </div>

        <div className="bg-gray-800 p-4 md:p-5 rounded-xl shadow border border-gray-700">
          <p className="text-gray-400 text-xs md:text-sm">Top Product</p>
          <h2 className="text-sm md:text-base font-semibold mt-1 leading-snug break-words text-white">
            {Object.keys(topProducts)[0]}
          </h2>
        </div>

        <div className="bg-gray-800 p-4 md:p-5 rounded-xl shadow border border-gray-700">
          <p className="text-gray-400 text-xs md:text-sm">Top Country</p>
          <h2 className="text-sm md:text-base font-semibold mt-1 text-white">
            {Object.keys(countrySales)[0]}
          </h2>
        </div>

      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

        <div className="bg-gray-800 p-4 md:p-5 rounded-xl shadow border border-gray-700">
          <h3 className="text-sm md:text-base font-medium mb-3">📈 Yearly Revenue</h3>
          <Line data={yearlyChart} options={chartOptions} />
        </div>

        <div className="bg-gray-800 p-4 md:p-5 rounded-xl shadow border border-gray-700">
          <h3 className="text-sm md:text-base font-medium mb-3">🏆 Top Products</h3>
          <Bar data={productChart} options={chartOptions} />
        </div>

        <div className="bg-gray-800 p-4 md:p-5 rounded-xl shadow border border-gray-700 md:col-span-2">
          <h3 className="text-sm md:text-base font-medium mb-3">🌍 Country Sales</h3>
          <Bar data={countryChart} options={chartOptions} />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
