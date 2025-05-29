import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="p-6 pr-10 flex flex-col gap-6 text-lg h-screen border-r bg-blue-50 text-blue-900">
      <Link
        href="/admin"
        className="hover:text-blue-700 font-medium transition-colors"
      >
        🧭 Dashboard
      </Link>
      <Link
        href="/admin/user"
        className="hover:text-blue-700 font-medium transition-colors"
      >
        👤 Users
      </Link>
      <Link
        href="/admin/product"
        className="hover:text-blue-700 font-medium transition-colors"
      >
        📦 Product
      </Link>
    </div>
  );
}

export default Sidebar;
