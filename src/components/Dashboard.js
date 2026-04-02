import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import "chart.js/auto";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(
  "https://ph4jwluqme.execute-api.ap-south-1.amazonaws.com/get-insights?id=retail-summary",
  {
    headers: {
      Authorization: "Bearer my-secret-token"
    }
  }
)
.then((res) => console.log(res.data))
.catch((err) => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  const yearlySales = data.yearly_sales;
  const topProducts = data.top_products;
  const countrySales = data.country_sales;

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

  const productChart = {
    labels: Object.keys(topProducts),
    datasets: [
      {
        label: "Top Products",
        data: Object.values(topProducts),
        backgroundColor: "#22c55e",
      },
    ],
  };

  const countryChart = {
    labels: Object.keys(countrySales),
    datasets: [
      {
        label: "Country Sales",
        data: Object.values(countrySales),
        backgroundColor: "#f59e0b",
      },
    ],
  };

  return (
    <div className="space-y-6">

      {/* 🔹 Revenue Card */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl mb-2">📊 Dashboard</h2>
        <p className="text-green-400 text-lg">
          💰 Total Revenue: {data.total_revenue}
        </p>
      </div>

      {/* 🔹 GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Yearly Chart */}
        <div className="bg-gray-800 p-5 rounded-2xl shadow-lg">
          <h3 className="text-lg mb-3">📈 Yearly Revenue</h3>
          <Line data={yearlyChart} />
        </div>

        {/* Top Products */}
        <div className="bg-gray-800 p-5 rounded-2xl shadow-lg">
          <h3 className="text-lg mb-3">🏆 Top Products</h3>
          <Bar data={productChart} />
        </div>

        {/* Country Sales */}
        <div className="bg-gray-800 p-5 rounded-2xl shadow-lg md:col-span-2">
          <h3 className="text-lg mb-3">🌍 Country Sales</h3>
          <Bar data={countryChart} />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;