import React from "react";
import { FaEllipsisV } from "react-icons/fa";

export default function History({ expenses = [] }) {
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen p-4">
      {/* Mobile-locked container */}
      <div className="w-full max-w-[360px]">

        {/* Page Title */}
        <h1 className="text-2xl font-bold text-green-800 mb-6 text-center">
          Expense History
        </h1>

        {/* Expense List */}
        {expenses.length === 0 ? (
          <div className="text-center text-gray-400 mt-10">
            No expense history yet
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {expenses.map((e) => (
              <div
                key={e.id}
                className="bg-white rounded-xl shadow p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-bold text-green-800">{e.name}</p>
                  <p className="text-sm text-gray-500">
                    {e.date} • {e.category} • {e.paymentMode || "Cash"}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-bold text-red-600">₱{e.amount}</span>
                  <FaEllipsisV className="text-gray-500 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
