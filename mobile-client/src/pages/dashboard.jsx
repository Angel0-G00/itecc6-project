import React from "react";
import { FaMoneyBillWave, FaList } from "react-icons/fa";

export default function Dashboard({ expenses = [] }) {
  const totalExpenses = expenses.reduce(
    (sum, e) => sum + Number(e.amount || 0),
    0
  );

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen p-4">
      {/* Mobile-locked container */}
      <div className="w-full max-w-[360px] flex flex-col gap-6">

        {/* Page Title */}
        <h1 className="text-2xl font-bold text-green-800 text-center">
          Dashboard
        </h1>

        {/* Total Expenses Card */}
        <div className="bg-green-100 p-6 rounded-xl shadow flex items-center gap-4">
          <FaMoneyBillWave className="text-green-700 text-3xl" />
          <div>
            <p className="text-gray-600">Total Expenses</p>
            <h2 className="text-2xl font-bold text-green-800">
              ₱{totalExpenses.toFixed(2)}
            </h2>
          </div>
        </div>

        {/* Number of Expenses Card */}
        <div className="bg-green-100 p-6 rounded-xl shadow flex items-center gap-4">
          <FaList className="text-green-700 text-3xl" />
          <div>
            <p className="text-gray-600">Number of Expenses</p>
            <h2 className="text-2xl font-bold text-green-800">
              {expenses.length}
            </h2>
          </div>
        </div>

      </div>
    </div>
  );
}
