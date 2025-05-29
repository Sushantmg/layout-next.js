"use client";
import { login } from "@/server-actions/auth-actions";
import { setCookies } from "@/server-actions/cookies-actions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function loginUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await login({ password, username });
      if (!res.isSuccess) {
        throw new Error(res.error);
      }
      await setCookies("token", res.token || "");
      router.push("/admin");
      setError("");
      setPassword("");
      setUsername("");
    } catch (e) {
      if (typeof e === "string") {
        setError(e.toUpperCase());
      } else if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {loading && (
        <div className="text-blue-700 mb-3 text-sm font-medium text-center">
          Loading...
        </div>
      )}
      {error && (
        <div className="text-red-500 mb-3 text-sm font-medium text-center">
          {error}
        </div>
      )}

      <form onSubmit={loginUser} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-blue-900 mb-1">
            Email
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-blue-900 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-900"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
