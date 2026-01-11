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

  const handleSubmit = async (e) => {
    e.preventDefault();

    await onAddExpense({
      name: form.name,
      amount: Number(form.amount),
      category: form.category,
      date: form.date || new Date(),
      paymentMode: form.paymentMode || "Cash",
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
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-6 w-full max-w-[360px]">
        <div className="flex justify-between mb-4">
          <h2 className="font-bold text-green-800">Add Expense</h2>
          <FaTimes onClick={onClose} />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input name="name" placeholder="Name" onChange={handleChange} required />
          <input name="amount" type="number" placeholder="Amount" onChange={handleChange} required />
          <select name="category" onChange={handleChange} required>
            <option value="">Category</option>
            <option>Food</option>
            <option>Transport</option>
            <option>Entertainment</option>
          </select>
          <input name="date" type="date" onChange={handleChange} required />
          <input name="paymentMode" placeholder="Payment Mode" onChange={handleChange} />
          <button className="bg-green-500 text-white py-2 rounded">Add</button>
        </form>
      </div>
    </>
  );
}
