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
    .then((res) => setData(res.data))
    .catch((err) => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  const yearlySales = data.yearly_sales;
  const topProducts = data.top_products;
  const countrySales = data.country_sales;

  const yearlyChart = {
    labels: Object.keys(yearlySales),
    datasets: [{
      label: "Yearly Revenue",
      data: Object.values(yearlySales),
      borderColor: "#3b82f6",
      tension: 0.4,
    }],
  };

  const productChart = {
    labels: Object.keys(topProducts),
    datasets: [{
      label: "Top Products",
      data: Object.values(topProducts),
      backgroundColor: "#22c55e",
    }],
  };

  const countryChart = {
    labels: Object.keys(countrySales),
    datasets: [{
      label: "Country Sales",
      data: Object.values(countrySales),
      backgroundColor: "#f59e0b",
    }],
  };

  return (
    <div className="space-y-6">

      {/* 🔥 KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-gray-800 p-5 rounded-xl shadow">
          <p className="text-gray-400 text-sm">Total Revenue</p>
          <h2 className="text-2xl font-bold text-green-400">
            ₹{data.total_revenue}
          </h2>
        </div>

        <div className="bg-gray-800 p-5 rounded-xl shadow">
          <p className="text-gray-400 text-sm">Top Product</p>
          <h2>{Object.keys(topProducts)[0]}</h2>
        </div>

        <div className="bg-gray-800 p-5 rounded-xl shadow">
          <p className="text-gray-400 text-sm">Top Country</p>
          <h2>{Object.keys(countrySales)[0]}</h2>
        </div>

      </div>

      {/* 🔹 CHART GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-gray-800 p-5 rounded-xl shadow">
          <h3 className="mb-3">📈 Yearly Revenue</h3>
          <Line data={yearlyChart} />
        </div>

        <div className="bg-gray-800 p-5 rounded-xl shadow">
          <h3 className="mb-3">🏆 Top Products</h3>
          <Bar data={productChart} />
        </div>

        <div className="bg-gray-800 p-5 rounded-xl shadow md:col-span-2">
          <h3 className="mb-3">🌍 Country Sales</h3>
          <Bar data={countryChart} />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;