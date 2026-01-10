import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Dashboard from "./pages/dashboard.jsx";
import History from "./pages/history.jsx";
import Users from "./pages/users.jsx";
import Footer from "./components/footer.jsx";
import AddExpenses from "./pages/addexpense.jsx";

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [addExpenseOpen, setAddExpenseOpen] = useState(false);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                expenses={expenses}
                openAddExpense={() => setAddExpenseOpen(true)}
              />
            }
          />
          <Route path="/dashboard" element={<Dashboard expenses={expenses} />} />
          <Route path="/history" element={<History expenses={expenses} />} />
          <Route path="/users" element={<Users />} />
        </Routes>

        {/* Footer Navigation */}
        <Footer />

        {/* Add Expense Modal */}
        <AddExpenses
          isOpen={addExpenseOpen}
          onClose={() => setAddExpenseOpen(false)}
          onAddExpense={addExpense}
        />
      </div>
    </BrowserRouter>
  );
}
