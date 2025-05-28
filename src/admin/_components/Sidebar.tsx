import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="p-4 mr-4 flex flex-col gap-3 text-2xl h-screen border-r">
      <Link href={"/admin"}>Dashboard</Link>
      <Link href={"/admin/user"}>Users</Link>
      <Link href={"/admin/product"}>Product</Link>
    </div>
  );
}

export default Sidebar;