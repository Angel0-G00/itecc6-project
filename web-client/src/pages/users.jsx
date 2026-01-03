import React from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaCalendarAlt,
  FaUserTag,
} from "react-icons/fa";

export default function Users() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-green-800 mb-8">
        User Profile
      </h1>

      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Top Banner */}
        <div className="bg-green-700 h-32 relative">
          <div className="absolute -bottom-12 left-8">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <FaUserCircle className="text-green-700 text-7xl" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-16 px-8 pb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-green-800">
                John Doe
              </h2>
              <p className="text-gray-500">
                johndoe@email.com
              </p>
            </div>

            <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
              Active User
            </span>
          </div>

          {/* Divider */}
          <div className="my-6 border-t" />

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 bg-green-50 p-4 rounded-xl">
              <FaUserTag className="text-green-700 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="font-semibold text-green-800">
                  User
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-green-50 p-4 rounded-xl">
              <FaCalendarAlt className="text-green-700 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Joined</p>
                <p className="font-semibold text-green-800">
                  2024
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-green-50 p-4 rounded-xl sm:col-span-2">
              <FaEnvelope className="text-green-700 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold text-green-800">
                  johndoe@email.com
                </p>
              </div>
            </div>
          </div>

        
          </div>
        </div>
      </div>
  );
}
