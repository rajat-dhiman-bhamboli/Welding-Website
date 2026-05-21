"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
    { name: "Services", href: "/services", icon: <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /> },
    { name: "Shop", href: "/shop", icon: <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /> },
    { name: "Gallery", href: "/gallery", icon: <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /> }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass rounded-3xl transition-all duration-500 relative overflow-hidden ${scrolled ? 'px-6 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/10' : 'px-4 py-4 border-white/5'} flex items-center justify-between`}>
          {/* Animated Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent" />
          
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-11 h-11 bg-brand-orange rounded-xl flex items-center justify-center spark-glow group-hover:rotate-[360deg] transition-transform duration-700">
                <span className="text-white font-black text-2xl tracking-tighter">W</span>
                <div className="absolute inset-0 bg-white/20 rounded-xl animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white uppercase leading-none">
                  Welding<span className="text-brand-orange">Experts</span>
                </span>
                <span className="text-[8px] font-black tracking-[0.4em] text-gray-500 uppercase mt-1">Industrial Mastery</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center bg-white/5 rounded-2xl p-1.5 border border-white/5">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={item.name}
                    href={item.href} 
                    className={`relative px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 group ${isActive ? 'text-white' : 'text-gray-500 hover:text-white'}`}
                  >
                    <svg className={`w-4 h-4 transition-transform group-hover:-translate-y-0.5 ${isActive ? 'text-brand-orange' : 'text-gray-600 group-hover:text-brand-orange'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                    {item.name}
                    
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-orange rounded-full spark-glow" />
                    )}
                    
                    {!isActive && (
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-xl transition-colors" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/cart" className="relative w-12 h-12 flex items-center justify-center text-white bg-white/5 hover:bg-white/10 rounded-2xl transition-all group border border-white/5">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-lg shadow-brand-orange/40">
                  {totalItems}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end hidden sm:flex">
                  <span className="text-[10px] font-black text-brand-orange uppercase tracking-widest">Active User</span>
                  <span className="text-xs font-bold text-white uppercase">{user.name}</span>
                </div>
                <button 
                  onClick={logout}
                  className="p-3 bg-white/5 hover:bg-red-500/20 text-white rounded-2xl transition-all border border-white/5 group"
                  title="Logout"
                >
                  <svg className="w-5 h-5 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            ) : (
              <Link href="/login" className="hidden sm:flex items-center gap-2 px-6 py-3 bg-white text-brand-dark rounded-2xl font-black text-[11px] hover:bg-brand-orange hover:text-white transition-all shadow-xl uppercase tracking-widest group">
                Access Panel
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </Link>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-2xl bg-white/5 text-white focus:outline-none md:hidden border border-white/5"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mx-4 mt-3 glass rounded-[2.5rem] border-white/10 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-500 shadow-2xl">
          <div className="p-4 space-y-2">
            {navLinks.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-black text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 uppercase tracking-[0.2em]"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              {user ? (
                <button 
                  onClick={() => { logout(); setIsOpen(false); }}
                  className="block w-full py-5 bg-red-500/20 text-red-500 border border-red-500/50 rounded-[2rem] text-xs font-black text-center uppercase tracking-[0.3em]"
                >
                  Logout ({user.name})
                </button>
              ) : (
                <Link href="/login" className="block w-full py-5 bg-brand-orange text-white rounded-[2rem] text-xs font-black text-center uppercase tracking-[0.3em] shadow-lg shadow-brand-orange/30">
                  Access Panel
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
