import React, { useState, useEffect } from "react";
import { FaPlus, FaEllipsisV } from "react-icons/fa";
import AddExpenses from "./addexpense.jsx";

export default function Home() {
  const [expenses, setExpenses] = useState([]);
  const [monthIndex, setMonthIndex] = useState(0);
  const [addExpenseOpen, setAddExpenseOpen] = useState(false);
  const [menuOpenId, setMenuOpenId] = useState(null);

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

  const fetchExpenses = async () => {
    try {
      const res = await fetch("http://localhost:5000/expenses");
      const data = await res.json();
      setExpenses(data);
    } catch (err) {
      console.error("Failed to fetch expenses:", err);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleAddExpense = async (newExpense) => {
    try {
      const res = await fetch("http://localhost:5000/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newExpense),
      });

      const savedExpense = await res.json();
      setExpenses((prev) => [savedExpense, ...prev]);
    } catch (err) {
      console.error("Failed to add expense:", err);
    }
  };

  // ✅ DELETE expense (DB + UI)
  const handleDeleteExpense = async (id) => {
    try {
      await fetch(`http://localhost:5000/expenses/${id}`, {
        method: "DELETE",
      });

      setExpenses((prev) => prev.filter((e) => e._id !== id));
    } catch (err) {
      console.error("Failed to delete expense:", err);
    }
  };

  // ✅ EDIT expense (DB + UI)
  const handleEditExpense = async (updatedExpense) => {
    try {
      const res = await fetch(
        `http://localhost:5000/expenses/${updatedExpense._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedExpense),
        }
      );

      const saved = await res.json();

      setExpenses((prev) =>
        prev.map((e) => (e._id === saved._id ? saved : e))
      );
    } catch (err) {
      console.error("Failed to edit expense:", err);
    }
  };

  return (
    <main className="flex-1 p-6">
      <AddExpenses
        isOpen={addExpenseOpen}
        onClose={() => setAddExpenseOpen(false)}
        onAddExpense={handleAddExpense}
      />

      <div className="flex gap-6 mt-4">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6 flex-[2]">
          {/* Balance Card */}
          <div className="bg-green-200 p-6 rounded-xl shadow">
            <div className="text-2xl font-bold text-green-800">
              ₱{expenses.reduce((sum, e) => sum + Number(e.amount || 0), 0).toFixed(2)}
            </div>
            <div className="mt-2 text-green-600">Balance</div>
            <div className="h-1 bg-yellow-400 mt-4 rounded-full" />
          </div>

          {/* Expenses */}
          <div className="bg-white p-4 rounded-xl shadow gap-4 flex flex-col">
            <div className="flex justify-between items-center">
              <h2 className="text-green-800 font-bold text-lg">Expenses</h2>
              <button
                onClick={() => setAddExpenseOpen(true)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center gap-2"
              >
                <FaPlus /> Add
              </button>
            </div>

            {expenses.length === 0 ? (
              <div className="text-center text-gray-400 py-4">
                No expenses yet
              </div>
            ) : (
              expenses.map((e) => (
                <div
                  key={e._id}
                  className="flex justify-between items-center p-4 border-b last:border-b-0"
                >
                  <div>
                    <span className="font-bold text-green-800">{e.name}</span>
                    <div className="text-sm text-gray-500">
                      {new Date(e.date).toLocaleDateString()} • {e.paymentMode || "Cash"}
                    </div>
                  </div>

                  {/* AMOUNT + MENU */}
                  <div className="flex items-center gap-3 relative">
                    <span className="font-bold">₱{e.amount}</span>

                    <FaEllipsisV
                      className="text-gray-500 cursor-pointer"
                      onClick={() =>
                        setMenuOpenId(menuOpenId === e._id ? null : e._id)
                      }
                    />

                    {menuOpenId === e._id && (
                      <div className="absolute right-0 top-6 w-28 bg-white border rounded-lg shadow-md z-10">
                        <div
                          className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            const newName = prompt("Edit expense name:", e.name);
                            const newAmount = prompt("Edit amount:", e.amount);

                            if (!newName || !newAmount) return;

                            handleEditExpense({
                              ...e,
                              name: newName,
                              amount: Number(newAmount),
                            });

                            setMenuOpenId(null);
                          }}
                        >
                          Edit
                        </div>

                        <div
                          className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            if (!window.confirm("Delete this expense?")) return;
                            handleDeleteExpense(e._id);
                            setMenuOpenId(null);
                          }}
                        >
                          Delete
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* RIGHT SIDE – METRICS */}
        <div className="flex-[1] flex flex-col gap-4">
          {/* Month Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setMonthIndex((i) => (i - 1 + 12) % 12)}
              className="px-2 py-1 bg-green-300 rounded hover:bg-green-400"
            >
              &lt;
            </button>

            <div className="flex-1 flex justify-center">
              {displayedMonths.map((m, i) => (
                <span
                  key={m}
                  className={`mx-4 ${
                    i === 1 ? "font-bold text-lg" : "text-sm text-gray-600"
                  }`}
                >
                  {m}
                </span>
              ))}
            </div>

            <button
              onClick={() => setMonthIndex((i) => (i + 1) % 12)}
              className="px-2 py-1 bg-green-300 rounded hover:bg-green-400"
            >
              &gt;
            </button>
          </div>

          {/* Total Expenses */}
          <div className="bg-green-100 p-6 rounded-xl shadow text-center">
            <div className="text-gray-600 text-sm">Total Expenses This Month</div>
            <div className="text-green-800 font-bold text-2xl mt-2">
              ₱{expenses
                .filter(e => new Date(e.date).getMonth() === monthIndex)
                .reduce((sum, e) => sum + Number(e.amount || 0), 0)
                .toFixed(2)}
            </div>
          </div>

          {/* Number of Expenses */}
          <div className="bg-green-100 p-6 rounded-xl shadow text-center">
            <div className="text-gray-600 text-sm">Number of Expenses</div>
            <div className="text-green-800 font-bold text-2xl mt-2">
              {expenses.filter(e => new Date(e.date).getMonth() === monthIndex).length}
            </div>
          </div>

          {/* Most Expensive */}
          <div className="bg-green-100 p-6 rounded-xl shadow text-center">
            <div className="text-gray-600 text-sm">Most Expensive Item</div>
            <div className="text-green-800 font-bold text-lg mt-2">
              {(() => {
                const monthExpenses = expenses.filter(
                  e => new Date(e.date).getMonth() === monthIndex
                );
                if (!monthExpenses.length) return "-";
                const maxExp = monthExpenses.reduce((a, b) =>
                  Number(b.amount) > Number(a.amount) ? b : a
                );
                return `${maxExp.name} ₱${maxExp.amount}`;
              })()}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
