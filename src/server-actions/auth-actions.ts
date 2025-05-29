"use server";
import { LoginCredentials } from "@/types/auth-types";
import { removeCookies } from "./cookies-actions";
import { redirect } from "next/navigation";

export async function login(data: LoginCredentials) {
  console.log("login called");
  if (data.username === "Susg" && data.password === "123") {
    return { data: "login success", isSuccess: true, token: "susg's token" };
  } else {
    return { error: "invalid credentials", isSuccess: false };
  }
}

export async function logout() {
  await removeCookies("token");
  redirect("/login");
}