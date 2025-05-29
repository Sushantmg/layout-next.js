import React from "react";
import LoginForm from "./_component/LoginForm";
import { getCookies } from "@/server-actions/cookies-actions";
import { redirect } from "next/navigation";

async function page() {
  const cookie = await getCookies("token");
  if (cookie) {
    return redirect("/admin");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}

export default page;
