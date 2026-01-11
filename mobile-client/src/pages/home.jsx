import React, { useEffect, useState } from "react";
import { FaPlus, FaEllipsisV } from "react-icons/fa";
import AddExpenses from "./addexpense";
import API_URL from "../api";

export default function Home() {
  const [expenses, setExpenses] = useState([]);
  const [addOpen, setAddOpen] = useState(false);
  const [menuOpenId, setMenuOpenId] = useState(null);

  const fetchExpenses = async () => {
    const res = await fetch(`${API_URL}/expenses`);
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  /* ======================
     ADD
  ====================== */
  const handleAddExpense = async (expense) => {
    const res = await fetch(`${API_URL}/expenses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expense),
    });

    const saved = await res.json();
    setExpenses((prev) => [saved, ...prev]);
  };

  /* ======================
     DELETE (FROM WEB LOGIC)
  ====================== */
  const handleDeleteExpense = async (id) => {
    if (!window.confirm("Delete this expense?")) return;

    await fetch(`${API_URL}/expenses/${id}`, {
      method: "DELETE",
    });

    setExpenses((prev) => prev.filter((e) => e._id !== id));
  };

  /* ======================
     EDIT (FROM WEB LOGIC)
  ====================== */
  const handleEditExpense = async (expense) => {
    const newName = prompt("Edit expense name:", expense.name);
    const newAmount = prompt("Edit amount:", expense.amount);

    if (!newName || !newAmount) return;

    const res = await fetch(`${API_URL}/expenses/${expense._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...expense,
        name: newName,
        amount: Number(newAmount),
      }),
    });

    const updated = await res.json();

    setExpenses((prev) =>
      prev.map((e) => (e._id === updated._id ? updated : e))
    );
  };

  const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-4 pb-20">
      <AddExpenses
        isOpen={addOpen}
        onClose={() => setAddOpen(false)}
        onAddExpense={handleAddExpense}
      />

      {/* Balance */}
      <div className="bg-green-200 w-full max-w-[360px] p-6 rounded-xl shadow mb-6 text-center">
        <div className="text-2xl font-bold text-green-800">
          ₱{total.toFixed(2)}
        </div>
        <div className="mt-2 text-green-600">Balance</div>
      </div>

      {/* Expenses */}
      <div className="bg-white w-full max-w-[360px] p-4 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-green-800 font-bold text-lg">Expenses</h2>
          <button
            onClick={() => setAddOpen(true)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            <FaPlus /> Add
          </button>
        </div>

        {expenses.map((e) => (
          <div
            key={e._id}
            className="flex justify-between items-center p-3 border-b relative"
          >
            <div>
              <p className="font-bold text-green-800">{e.name}</p>
              <p className="text-sm text-gray-500">
                {new Date(e.date).toLocaleDateString()}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bold">₱{e.amount}</span>

              <FaEllipsisV
                className="cursor-pointer"
                onClick={() =>
                  setMenuOpenId(menuOpenId === e._id ? null : e._id)
                }
              />
            </div>

            {menuOpenId === e._id && (
              <div className="absolute right-4 top-12 bg-white border rounded shadow z-10">
                <div
                  className="px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    handleEditExpense(e);
                    setMenuOpenId(null);
                  }}
                >
                  Edit
                </div>
                <div
                  className="px-4 py-2 text-red-600 hover:bg-gray-100"
                  onClick={() => {
                    handleDeleteExpense(e._id);
                    setMenuOpenId(null);
                  }}
                >
                  Delete
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
