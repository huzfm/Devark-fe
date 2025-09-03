"use client";

import TerminalBox from "./TerminalBox";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen py-12 px-6 lg:px-12 relative bg-black overflow-hidden">
      {/* grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:35px_35px]" />

      {/* layout */}
      <div className="container mx-auto max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-white border border-white/20 mb-6">
            <Zap className="w-4 h-4 animate-pulse" />
            <span className="font-bold">shadcn/ui but for backend</span>
          </div>

          <h1 className="font-doto text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6">
            Build Your{" "}
            <span className="font-doto text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white">
              Infrastructure
            </span>
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-lg font-mono leading-relaxed">
            With just one command, build your backend infrastructure. Add{" "}
            <span className="font-bold text-white">
              authentication, payments,
            </span>
            <br />
            <span className="font-bold text-white">OTP-services</span> and more
            instantly.
          </p>

          {/* CTA */}
          <div className="flex gap-4 mb-10">
            <Button
              size="lg"
              className="group px-8 py-4 bg-white/80 text-black font-extrabold rounded-xl hover:bg-white/100"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-300">
            {["Zero Config", "Production Ready", "Developer First"].map(
              (f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full animate-pulse ${
                      i === 0
                        ? "bg-white"
                        : i === 1
                        ? "bg-gray-400"
                        : "bg-gray-600"
                    }`}
                  />
                  {f}
                </div>
              )
            )}
          </div>
        </div>

        {/* RIGHT - Demo */}
        <div className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden ">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/test.jpg"
              alt="Backend Infrastructure Window"
              fill // ✅ auto-scale in container
              className="object-contain drop-shadow-2xl p-4 sm:p-6 md:p-8"
              priority
            />
          </div>
        </div>
      </div>

      {/* Terminal */}
      <div className="pt-20">
        <TerminalBox />
      </div>
    </section>
  );
}
