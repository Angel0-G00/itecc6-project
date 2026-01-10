import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function AddExpenses({ isOpen, onClose, onAddExpense }) {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    category: "",
    date: "",
    paymentMode: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddExpense({
      ...form,
      amount: Number(form.amount),
      id: Date.now(),
    });

    setForm({
      name: "",
      amount: "",
      category: "",
      date: "",
      paymentMode: "",
    });

    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      bg-white rounded-xl shadow-lg z-50 w-full max-w-[360px] p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-green-800 text-lg">Add Expense</h2>
          <button onClick={onClose}>
            <FaTimes className="text-gray-600 text-xl" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            placeholder="Expense Name"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="amount"
            type="number"
            placeholder="Amount"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={form.amount}
            onChange={handleChange}
            required
          />

          <select
            name="category"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">Category</option>
            <option>Food</option>
            <option>Transport</option>
            <option>Entertainment</option>
            <option>Others</option>
          </select>

          <input
            name="date"
            type="date"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={form.date}
            onChange={handleChange}
            required
          />

          <input
            name="paymentMode"
            placeholder="Payment Mode"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={form.paymentMode}
            onChange={handleChange}
          />

          <button className="bg-green-500 text-white py-2 rounded w-full hover:bg-green-600 transition">
            Add Expense
          </button>
        </form>
      </div>
    </>
  );
}
