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
    <div>
      <LoginForm />
    </div>
  );
}

export default page;