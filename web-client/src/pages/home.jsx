import React, { useState } from "react";
import { FaPlus, FaEllipsisV } from "react-icons/fa";

export default function Home({ openAddExpense, expenses }) {
  const [monthIndex, setMonthIndex] = useState(0);

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const getDisplayedMonths = () => {
    const prev = months[(monthIndex - 1 + 12) % 12];
    const current = months[monthIndex];
    const next = months[(monthIndex + 1) % 12];
    return [prev, current, next];
  };

  const displayedMonths = getDisplayedMonths();

  return (
    <main className="flex-1 p-6">
      <div className="flex gap-6 mt-4">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6 flex-[2]">
          {/* Balance Card */}
          <div className="bg-green-200 p-6 rounded-xl shadow">
            <div className="text-2xl font-bold text-green-800">
              ₱1,250.00
            </div>
            <div className="mt-2 text-green-600">Balance</div>
            <div className="h-1 bg-yellow-400 mt-4 rounded-full" />
          </div>

          {/* Expenses */}
          <div className="bg-white p-4 rounded-xl shadow gap-4 flex flex-col">
            <div className="flex justify-between items-center">
              <h2 className="text-green-800 font-bold text-lg">
                Expenses
              </h2>
              <button
                onClick={openAddExpense}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center gap-2"
              >
                <FaPlus /> Add
              </button>
            </div>

            {/* Filters */}
            <div className="flex gap-4 items-center p-4">
              <span className="font-semibold text-green-800">
                Filter by:
              </span>
              <select className="border border-green-300 rounded px-2 py-1">
                <option>Category</option>
              </select>
              <input
                type="date"
                className="border border-green-300 rounded px-2 py-1"
              />
            </div>

            {/* Expenses List */}
            {expenses.length === 0 ? (
              <div className="text-center text-gray-400 py-4">
                No expenses yet
              </div>
            ) : (
              expenses.map((e) => (
                <div
                  key={e.id}
                  className="flex justify-between items-center p-4 border-b last:border-b-0"
                >
                  <div>
                    <span className="font-bold text-green-800">
                      {e.name}
                    </span>
                    <div className="text-sm text-gray-500">
                      {e.date} • {e.paymentMode || "Cash"}
                    </div>
                  </div>

                  <div className="flex gap-2 items-center">
                    <span className="font-bold">
                      ₱{e.amount}
                    </span>
                    <FaEllipsisV className="text-gray-500 cursor-pointer" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-[1] bg-green-100 rounded-xl shadow flex flex-col p-4">
          <div className="flex justify-between items-center mb-4">
            <button onClick={() => setMonthIndex((i) => (i - 1 + 12) % 12)}>
              &lt;
            </button>

            <div className="flex-1 flex justify-center">
              {displayedMonths.map((m, i) => (
                <span
                  key={m}
                  className={`mx-4 ${
                    i === 1
                      ? "font-bold text-lg"
                      : "text-sm text-gray-600"
                  }`}
                >
                  {m}
                </span>
              ))}
            </div>

            <button onClick={() => setMonthIndex((i) => (i + 1) % 12)}>
              &gt;
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center text-gray-500">
            [Graph Placeholder]
          </div>

          <div className="mt-4 p-10 bg-green-200 rounded text-center font-bold">
            Total: ₱0.00
          </div>
        </div>
      </div>
    </main>
  );
}
