import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Users from "./pages/users";
import Dashboard from "./pages/dashboard";
import History from "./pages/history";
import Footer from "./components/footer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
