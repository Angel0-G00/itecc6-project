import React from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaCalendarAlt,
  FaUserTag,
} from "react-icons/fa";

export default function Users() {
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen p-4">
      {/* Mobile-locked container */}
      <div className="w-full max-w-[360px]">

        {/* Page Title */}
        <h1 className="text-2xl font-bold text-green-800 mb-6 text-center">
          User Profile
        </h1>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Top Banner */}
          <div className="bg-green-700 h-24 relative">
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <FaUserCircle className="text-green-700 text-7xl" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-16 px-4 pb-6">

            {/* Name & Status */}
            <div className="flex flex-col items-center gap-2 mb-6">
              <h2 className="text-xl font-bold text-green-800 text-center">
                John Doe
              </h2>
              <p className="text-gray-500 text-center">
                johndoe@email.com
              </p>
              <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mt-2">
                Active User
              </span>
            </div>

            {/* Info Sections */}
            <div className="flex flex-col gap-4">

              <div className="flex items-center gap-4 bg-green-50 p-4 rounded-xl">
                <FaUserTag className="text-green-700 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Role</p>
                  <p className="font-semibold text-green-800">User</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-green-50 p-4 rounded-xl">
                <FaCalendarAlt className="text-green-700 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Joined</p>
                  <p className="font-semibold text-green-800">2024</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-green-50 p-4 rounded-xl">
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
    </div>
  );
}
