import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import API_URL from "../api";

export default function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${API_URL}/users`);
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-green-800 text-center mb-4">
        Users
      </h1>

      {users.map((u) => (
        <div key={u._id} className="bg-white p-4 rounded-xl shadow mb-4">
          <FaUserCircle className="text-5xl text-green-700 mx-auto" />
          <p className="text-center font-bold">{u.name}</p>
          <p className="text-center text-gray-500">{u.email}</p>
        </div>
      ))}
    </div>
  );
}
