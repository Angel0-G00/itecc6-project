import React from "react";
import { FaHome, FaChartBar, FaList, FaUserCircle } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", icon: <FaHome />, path: "/" },
    { label: "Dashboard", icon: <FaChartBar />, path: "/dashboard" },
    { label: "History", icon: <FaList />, path: "/history" },
    { label: "Profile", icon: <FaUserCircle />, path: "/users" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-green-800 shadow-inner">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center text-white text-sm ${
                isActive ? "text-yellow-400" : "text-green-100"
              }`}
            >
              <div className="text-2xl">{item.icon}</div>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
