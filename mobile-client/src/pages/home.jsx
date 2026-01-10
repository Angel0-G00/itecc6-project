import React from "react";
import { FaPlus } from "react-icons/fa";

export default function Home({ openAddExpense, expenses }) {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-4 pb-20">
      {/* Balance Card */}
      <div className="bg-green-200 w-full max-w-[360px] p-6 rounded-xl shadow-md mb-6 text-center">
        <div className="text-2xl font-bold text-green-800">₱1,250.00</div>
        <div className="mt-2 text-green-600">Balance</div>
        <div className="h-1 bg-yellow-400 mt-4 rounded-full" />
      </div>

      {/* Expenses Section */}
      <div className="bg-white w-full max-w-[360px] p-4 rounded-xl shadow-md flex flex-col gap-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-green-800 font-bold text-lg">Expenses</h2>
          <button
            onClick={openAddExpense}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center gap-2"
          >
            <FaPlus /> Add
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-2 mb-2">
          <span className="font-semibold text-green-800">Filter by:</span>
          <select className="border border-green-300 rounded px-2 py-1 w-full">
            <option>Category</option>
          </select>
          <input
            type="date"
            className="border border-green-300 rounded px-2 py-1 w-full"
          />
        </div>

        {/* Expenses List */}
        {expenses && expenses.length > 0 ? (
          expenses.map((e) => (
            <div
              key={e.id}
              className="flex justify-between items-center p-3 border-b last:border-b-0"
            >
              <div>
                <span className="font-bold text-green-800">{e.name}</span>
                <div className="text-sm text-gray-500">
                  {e.date} • {e.paymentMode || "Cash"}
                </div>
              </div>
              <div className="font-bold">₱{e.amount}</div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-400 py-4">
            No expenses yet
          </div>
        )}
      </div>

      {/* Total Card */}
      <div className="bg-green-200 w-full max-w-[360px] p-6 mt-6 rounded-xl shadow-md text-center font-bold">
        Total: ₱0.00
      </div>
    </div>
  );
}
