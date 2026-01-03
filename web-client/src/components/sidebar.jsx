import React from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaHome, FaChartBar } from "react-icons/fa";

export default function Sidebar({ onClose }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />

      <aside className="fixed top-0 left-0 h-full w-72 bg-green-800 text-white z-50 flex flex-col">
        <div className="flex justify-between p-8 border-b border-green-700">
          <span className="font-bold">Menu</span>
          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-4 flex-1">
          <Link
            to="/dashboard"
            onClick={onClose}
            className="flex items-center gap-3 hover:bg-green-700 p-4 rounded"
          >
            <FaHome /> Dashboard
          </Link>

          <Link
            to="/history"
            onClick={onClose}
            className="flex items-center gap-3 hover:bg-green-700 p-4 rounded"
          >
            <FaChartBar /> History
          </Link>
        </nav>
      </aside>
    </>
  );
}
