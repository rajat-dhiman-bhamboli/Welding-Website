"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        login(data.user);
        router.push("/");
        router.refresh();
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen py-32 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full glow-bg blur-[150px] opacity-10" />
      
      <div className="glass p-10 rounded-[3rem] border-white/5 w-full max-w-md relative z-10 shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Welcome <span className="text-brand-orange">Back</span></h1>
          <p className="text-gray-500 mt-2 font-bold uppercase text-[10px] tracking-[0.3em]">Access the Control Panel</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-xl mb-6 text-sm font-bold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Frequency / Email</label>
            <input 
              type="email" required
              className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-orange outline-none text-white font-bold transition-all"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Access Key / Password</label>
            <input 
              type="password" required
              className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-orange outline-none text-white font-bold transition-all"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <button 
            disabled={loading}
            className="w-full py-6 bg-brand-orange text-white font-black rounded-2xl hover:scale-[1.02] transition-all shadow-xl shadow-brand-orange/30 uppercase tracking-[0.2em] text-sm disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>

        <p className="mt-8 text-center text-gray-500 font-bold text-xs uppercase tracking-widest">
          New to the workshop? <Link href="/signup" className="text-brand-orange hover:underline ml-1">Create Account</Link>
        </p>
      </div>
    </div>
  );
}
