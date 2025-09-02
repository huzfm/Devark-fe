"use client";

import TerminalBox from "./TerminalBox";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen py-10 px-6 lg:px-12 relative overflow-hidden bg-black">
      {/* grid background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:35px_35px]"></div>

      {/* subtle gradient overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* grid layout */}
      <div className="container mx-auto max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-lg font-semibold text-white mb-6 border border-white/20 shadow-lg">
            <Zap className="w-4 h-4 text-white animate-pulse" />
            <span className="text-white font-bold">
              shadcn/ui but for backend
            </span>
          </div>
          <h1 className="font-doto text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6">
            Build Your{" "}
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Infrastructure
            </span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg font-mono">
            With just one command, build your backend infrastructure. Add{" "}
            <span className="font-bold text-white ">
              authentication, payments,
            </span>{" "}
            <br />
            <span className="font-bold text-white ">OTP-services </span>
            and more instantly.
          </p>
          {/* Buttons */}
          <div className="flex gap-4 mb-10">
            <Button
              size="lg"
              className="group px-8 py-4 bg-white text-black font-bold rounded-xl shadow-lg hover:scale-105 transition-all"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          {/* Features */}
          <div className="flex flex-col sm:flex-row gap-4 text-sm font-medium text-gray-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Zero Config
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
              Production Ready
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"></div>
              Developer First
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - DEMO VIDEO */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support video.
          </video>
          {/* overlay gradient for style */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20"></div>
        </div>
      </div>
      <div className="pt-30">
        <TerminalBox />
      </div>
    </section>
  );
}
