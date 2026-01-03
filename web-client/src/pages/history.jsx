import React from "react";
import { FaEllipsisV } from "react-icons/fa";

export default function History({ expenses = [] }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Expense History
      </h1>

      {expenses.length === 0 ? (
        <div className="text-center text-gray-400 mt-10">
          No expense history yet
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow divide-y">
          {expenses.map((e) => (
            <div
              key={e.id}
              className="flex justify-between items-center p-4"
            >
              <div>
                <p className="font-bold text-green-800">
                  {e.name}
                </p>
                <p className="text-sm text-gray-500">
                  {e.date} • {e.category} • {e.paymentMode || "Cash"}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-bold text-red-600">
                  ₱{e.amount}
                </span>
                <FaEllipsisV className="text-gray-500 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
