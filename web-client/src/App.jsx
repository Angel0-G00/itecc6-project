import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header.jsx";
import Sidebar from "./components/sidebar.jsx";
import Home from "./pages/home.jsx";
import AddExpenses from "./pages/addexpense.jsx";
import Dashboard from "./pages/dashboard.jsx";
import History from "./pages/history.jsx";
import Users from "./pages/users.jsx";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [addExpenseOpen, setAddExpenseOpen] = useState(false);
  const [expenses, setExpenses] = useState([]); // ✅ NEW

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        {sidebarOpen && (
          <Sidebar onClose={() => setSidebarOpen(false)} />
        )}

        <div className="flex-1 flex flex-col">
          <Header toggleSidebar={() => setSidebarOpen((v) => !v)} />

          <Routes>
            <Route
              path="/"
              element={
                <Home
                  openAddExpense={() => setAddExpenseOpen(true)}
                  expenses={expenses}
                />
              }
            />
            <Route
              path="/dashboard"
              element={<Dashboard expenses={expenses} />}
            />

            <Route path="/users" element={<Users />} />
            
          </Routes>
        </div>

        <AddExpenses
          isOpen={addExpenseOpen}
          onClose={() => setAddExpenseOpen(false)}
          onAddExpense={addExpense}
        />
      </div>
    </BrowserRouter>
  );
}
