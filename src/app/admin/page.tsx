import React from "react";

function Admin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold text-blue-700">Welcome to Admin Panel</h1>
        <p className="mt-2 text-gray-600">You are logged in as admin.</p>
      </div>
    </div>
  );
}

export default Admin;
