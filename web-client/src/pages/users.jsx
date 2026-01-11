import React, { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaCalendarAlt,
  FaUserTag,
  FaEllipsisV,
} from "react-icons/fa";

export default function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/users");
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
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Users</h1>

      {users.length === 0 ? (
        <div className="text-gray-500">No users found</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden relative"
            >

              <div className="bg-green-700 h-32 relative">
                <div className="absolute -bottom-12 left-8">
                  <div className="bg-white rounded-full p-2 shadow-lg">
                    <FaUserCircle className="text-green-700 text-7xl" />
                  </div>
                </div>
              </div>

              <div className="pt-16 px-6 pb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-green-800">
                      {user.name}
                    </h2>
                    <p className="text-gray-500">{user.email}</p>
                  </div>
                  <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                    {user.role || "User"}
                  </span>
                </div>

                <div className="my-4 border-t" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 bg-green-50 p-4 rounded-xl">
                    <FaUserTag className="text-green-700 text-xl" />
                    <div>
                      <p className="text-sm text-gray-500">Role</p>
                      <p className="font-semibold text-green-800">
                        {user.role || "User"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-green-50 p-4 rounded-xl">
                    <FaCalendarAlt className="text-green-700 text-xl" />
                    <div>
                      <p className="text-sm text-gray-500">Joined</p>
                      <p className="font-semibold text-green-800">
                        {new Date(user.joined).getFullYear()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-green-50 p-4 rounded-xl sm:col-span-2">
                    <FaEnvelope className="text-green-700 text-xl" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-semibold text-green-800">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
