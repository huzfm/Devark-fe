"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion } from "framer-motion"; // 👈 smooth animations

export default function TerminalBox() {
  const [packageManager, setPackageManager] = useState<"npm" | "pnpm" | "yarn">(
    "npm"
  );
  const [copied, setCopied] = useState(false);

  const getCommand = (pm: "npm" | "pnpm" | "yarn") => {
    const commands = {
      npm: "npm install devark@latest",
      pnpm: "pnpm install devark@latest",
      yarn: "yarn add devark@latest",
    };
    return commands[pm];
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getCommand(packageManager));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Installation
        </h2>
        <p className="text-gray-400 text-lg font-mono">
          Get started with a single command — choose your favorite package
          manager.
        </p>
      </div>

      {/* Package Manager Switch */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative flex gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-1 border border-white/10 font-semibold">
          {(["npm", "pnpm", "yarn"] as const).map((pm) => (
            <button
              key={pm}
              onClick={() => setPackageManager(pm)}
              className={`relative px-5 py-2 text-sm font-mono rounded-lg transition-all duration-200 ${
                packageManager === pm
                  ? "text-black font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {packageManager === pm && (
                <motion.div
                  layoutId="activePM"
                  className="absolute inset-0 bg-white rounded-lg shadow-md"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                />
              )}
              <span className="relative z-10">{pm}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Box */}
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-gray-300 text-sm font-mono">Terminal</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-8 font-mono text-base">
          <div className="text-gray-400 mb-3">
            <span className="text-green-400">huzfm@devark</span>
            <span className="text-white">:~$</span>
          </div>

          <motion.div
            key={packageManager}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-gray-800/70 rounded-lg px-5 py-3 border border-white/10 flex items-center justify-between"
          >
            <div className="text-white tracking-tight">
              <span className="text-gray-500">$</span>{" "}
              {getCommand(packageManager)}
            </div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-300 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/10"
              title="Copy installation command"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">
                {copied ? "Copied!" : "Copy"}
              </span>
            </button>
          </motion.div>

          {/* Highlights */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-white">•</span>
              Fast installation
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white">•</span>
              Zero configuration
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white">•</span>
              Ready to use
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
