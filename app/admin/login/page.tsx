"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/public/images/Logo.jpg";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      if (data.user?.role !== "admin") {
        throw new Error("Access denied. Admin role required.");
      }

      // Successful login, redirect to dashboard
      router.push("/admin");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-gray-50 px-5 py-12">
      {/* Decorative Blur Orbs */}
      <div className="absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-yellow-100 blur-3xl opacity-60" />
      <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-yellow-50 blur-3xl opacity-60" />

      <div className="relative w-full max-w-md rounded-3xl border border-gray-100 bg-white/80 p-8 shadow-2xl backdrop-blur-md">
        {/* Header/Logo */}
        <div className="flex flex-col items-center text-center">
          <Image
            src={logo}
            alt="Cell Custody Logo"
            width={64}
            height={64}
            className="rounded-2xl shadow-sm"
          />
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
            CELL<span className="text-yellow-500">CUSTODY</span>
          </h1>
          <p className="mt-1 text-sm text-gray-500">Admin Control Panel</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@cellcustody.com"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-400">
          Authorized personnel only. Activities are logged.
        </p>
      </div>
    </main>
  );
}
