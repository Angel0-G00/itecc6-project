import React from "react";
import {
  FaBars,
  FaWallet,
  FaUserCircle,
  FaArrowLeft,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header({ toggleSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();

  const showBackButton = location.pathname !== "/";

  return (
    <div className="flex items-center bg-green-800 p-6 shadow">
      {showBackButton ? (
        <button
          className="text-white text-2xl mr-4"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
        </button>
      ) : (
        <button
          className="text-white text-2xl mr-4"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
      )}

      <div className="flex items-center space-x-2 mx-auto">
        <FaWallet className="text-green-200 text-3xl" />
        <h1 className="text-2xl font-bold text-green-100">
          Expense Tracker
        </h1>
      </div>

      {/* USER → USERS PAGE */}
      <div
        onClick={() => navigate("/users")}
        className="flex items-center space-x-2 cursor-pointer hover:opacity-80"
      >
        <FaUserCircle className="text-white text-3xl" />
        <span className="text-white font-semibold">
          User
        </span>
      </div>
    </div>
  );
}
