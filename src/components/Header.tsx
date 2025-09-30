"use client";
import { useState } from "react";
import Link from "next/link";
import { Zap, Github, Menu,  } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black lg:px-25 md:px-20 sm:px-0 relative">
      {/* Grid background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:35px_35px]"></div>

      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        {/* Logo */}
       <div className="flex items-center gap-2 ring-1 ring-white/20 bg-black rounded-2xl px-2 py-2 text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300">
          <div className="w-8 h-8 rounded-md flex items-center justify-center ">
            <Zap className="w-6 h-6 text-slate-300 " />
          </div>
          <span className="font-extrabold sm:text-2xl lg:text-3xl text-white">DevArk</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#components"
            className="font-mono text-white font-semibold hover:text-gray-300 transition-colors duration-200 relative group"
          >
            Components
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="https://github.com/huzfm/Devark/tree/master/documentation"
            target="_blank"
            className="font-mono text-white font-semibold hover:text-gray-300 transition-colors duration-200 relative group"
          >
            Docs
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* GitHub Button (desktop) */}
          <Link
            href="https://github.com/huzfm/Devark"
            target="_blank"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-mono font-bold bg-black text-white border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-black/95 border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          <Link
            href="#components"
            className="font-mono text-white font-semibold hover:text-gray-300 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Components
          </Link>
          <Link
            href="https://github.com/huzfm/Devark/tree/master/documentation"
            target="_blank"
            className="font-mono text-white font-semibold hover:text-gray-300 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Docs
          </Link>

          {/* GitHub Button (mobile) */}
          <Link
            href="https://github.com/huzfm/Devark"
            target="_blank"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-mono text-white border border-white/10 hover:bg-white/10 transition-all duration-300 w-fit"
            onClick={() => setMenuOpen(false)}
          >
            <Github className="w-4 h-4" />
            GitHub
          </Link>
        </nav>
      )}
    </header>
  );
}
