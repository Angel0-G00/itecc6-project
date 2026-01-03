import React from "react";
import { FaTimes, FaHome, FaChartBar, FaCog } from "react-icons/fa";

export default function Sidebar({ onClose }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-75 bg-green-800 text-white z-50 flex flex-col shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b border-green-700">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={onClose} className="text-xl">
            <FaTimes />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-4 gap-4 flex-1">
          {/* Top links */}
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="flex items-center gap-3 hover:bg-green-700 p-4 rounded"
            >
              <FaHome /> Dashboard
            </a>

            <a
              href="#"
              className="flex items-center gap-3 hover:bg-green-700 p-4 rounded"
            >
              <FaChartBar /> History
            </a>
          </div>

          {/* Bottom link */}
          <div className="mt-auto">
            <a
              href="#"
              className="flex items-center gap-3 hover:bg-green-700 p-4 rounded"
            >
              <FaCog /> Settings
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
}
