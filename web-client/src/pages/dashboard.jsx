import React from "react";
import { FaMoneyBillWave, FaList } from "react-icons/fa";

export default function Dashboard({ expenses = [] }) {
  const totalExpenses = expenses.reduce(
    (sum, e) => sum + Number(e.amount || 0),
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <div className="flex items-center gap-4">
            <FaMoneyBillWave className="text-green-700 text-3xl" />
            <div>
              <p className="text-gray-600">Total Expenses</p>
              <h2 className="text-2xl font-bold text-green-800">
                ₱{totalExpenses.toFixed(2)}
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-green-100 p-6 rounded-xl shadow">
          <div className="flex items-center gap-4">
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
    </div>
  );
}
