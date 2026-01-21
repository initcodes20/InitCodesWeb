"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Login failed");
      setLoading(false);
      return;
    }

    // ✅ STOP LOADING FIRST
    setLoading(false);

    // ✅ FORCE HARD NAVIGATION
    window.location.href = "/admin/dashboard";

  } catch (err) {
    setError("Something went wrong");
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen my-8 md:my-18 !bg-[#e5e4e1] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="line-bg"></div>

      {/* Header */}
      <div className="mb-10 text-center animate-fade-in">
        <div className="retro-text text-4xl flex items-center justify-center gap-4 text-black">
          <span className="opacity-30">{"<"}</span>
          <span className="font-medium tracking-tighter">INIT</span>
          <span className="opacity-30">{">"}</span>
        </div>
        <p className="normal-text text-[10px] tracking-[0.5em] uppercase font-bold opacity-60 mt-2">
          Codes
        </p>
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-10 md:p-14 z-10 border border-white">
        <header className="mb-10">
          <h1 className="text-2xl font-bold text-[#1a1f2e] mb-2">
            Admin Secure Login
          </h1>
          <p className="text-sm text-[#7a7a7a] font-medium">
            Authorized access only.
          </p>
        </header>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a1a1a1] ml-1">
              Admin Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@initcodes.com"
              className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-xl py-4 px-4 text-sm"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a1a1a1] ml-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-xl py-4 px-4 text-sm"
            />
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-xs font-medium">{error}</p>}

          {/* Button */}
          <button
            disabled={loading}
            className="w-full bg-black text-white rounded-xl py-4 text-xs font-bold uppercase tracking-[0.3em]"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
