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
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}

export default layout;