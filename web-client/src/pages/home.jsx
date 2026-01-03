import React, { useState } from "react";
import Sidebar from "../components/sidebar.jsx";
import {
  FaBars,
  FaWallet,
  FaUserCircle,
  FaPlus,
  FaEllipsisV,
} from "react-icons/fa";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Months
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [monthIndex, setMonthIndex] = useState(0); // center month index

  // Display 3 months at a time: [prev, current, next]
  const getDisplayedMonths = () => {
    const prev = months[(monthIndex - 1 + 12) % 12];
    const current = months[monthIndex];
    const next = months[(monthIndex + 1) % 12];
    return [prev, current, next];
  };

  const prevMonth = () => setMonthIndex((monthIndex - 1 + 12) % 12);
  const nextMonth = () => setMonthIndex((monthIndex + 1) % 12);

  const displayedMonths = getDisplayedMonths();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      {sidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center bg-green-800 p-6 shadow">
          <button
            className="text-white text-2xl mr-4"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars />
          </button>

          <div className="flex items-center space-x-2 mx-auto">
            <FaWallet className="text-green-200 text-3xl" />
            <h1 className="text-2xl font-bold text-green-100">
              Expense Tracker
            </h1>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer">
            <FaUserCircle className="text-white text-3xl" />
            <span className="text-white font-semibold hover:underline">John Doe</span>
          </div>
        </div>

        {/* Main content below header */}
        <main className="flex-1 p-6">
          <div className="flex gap-6 mt-4">
            {/* Left column: Balance + Expenses */}
            <div className="flex flex-col gap-6 flex-[2]">
              {/* Balance Box */}
              <div className="flex flex-col bg-green-200 p-6 rounded-xl shadow">
                <div className="text-2xl font-bold text-green-800">$1,250.00</div>
                <div className="mt-2 text-green-600">Balance</div>
                <div className="h-1 bg-yellow-400 mt-4 rounded-full"></div>
              </div>

              {/* Expenses Box including Filters */}
              <div className="flex flex-col bg-white p-4 rounded-xl shadow gap-4">
                {/* Title + Add */}
                <div className="flex justify-between items-center">
                  <h2 className="text-green-800 font-bold text-lg">Expenses</h2>
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition flex items-center gap-2">
                    <FaPlus /> Add
                  </button>
                </div>

                {/* Filters */}
                <div className="flex gap-4 items-center p-4 rounded-xl">
                  <span className="font-semibold text-green-800">Filter by:</span>
                  <select className="border border-green-300 rounded px-2 py-1">
                    <option value="">Category</option>
                    <option value="food">Food</option>
                    <option value="transport">Transport</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="others">Others</option>
                  </select>
                  <input
                    type="date"
                    className="border border-green-300 rounded px-2 py-1"
                  />
                </div>

                {/* Expense Item */}
                <div className="flex justify-between items-start p-4 rounded-xl w-full max-w-full">
                  <div className="flex flex-col">
                    <span className="font-bold text-green-800">Groceries</span>
                    <span className="text-gray-500 text-sm mt-1">2026-01-02 * Cash</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-green-800">$50.00</span>
                    <FaEllipsisV className="text-gray-500 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Graph Box */}
            <div className="flex-[1] bg-green-100 rounded-xl shadow h-l flex flex-col p-4">
              {/* Month Selector */}
              <div className="flex justify-between items-center mb-4">
                <button onClick={prevMonth} className="px-2 text-green-800 font-bold">
                  &lt;
                </button>

                <div className="flex justify-center items-center flex-1">
                  {displayedMonths.map((month, idx) => (
                    <span
                      key={month}
                      className={`mx-4 text-center ${
                        idx === 1
                          ? "text-green-900 font-bold text-lg"
                          : "text-green-700 text-sm"
                      }`}
                      style={{ width: "4rem" }}
                    >
                      {month}
                    </span>
                  ))}
                </div>

                <button onClick={nextMonth} className="px-2 text-green-800 font-bold">
                  &gt;
                </button>
              </div>

              {/* Placeholder for Graph */}
              <div className="flex-1 flex justify-center items-center">
                <span className="text-green-700">[Graph Placeholder]</span>
              </div>

              {/* Total at bottom */}
              <div className="mt-4 p-10 bg-green-200 rounded text-center font-bold text-green-800">
                Total: $0.00
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
