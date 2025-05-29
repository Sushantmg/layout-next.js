import { getCookies } from "@/server-actions/cookies-actions";
import React from "react";
import Sidebar from "./_components/Sidebar";
import { redirect } from "next/navigation";

async function layout({ children }: { children: React.ReactNode }) {
  const cookie = await getCookies("token");
  if (!cookie) {
    return redirect("/login");
  }
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
}

export default layout;
