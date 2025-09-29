"use client"
import { useState, useEffect } from "react"
import { ClipboardCopy, Check } from "lucide-react"

type ComponentCardProps = {
  title: string
  description: string
  command: string // e.g. `npx devark add oauth`
}

const comingSoonPackages = ["upload", "redis", "jwt"]

export default function ComponentCard({ title, description, command }: ComponentCardProps) {
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Extract package name (last word in command)
  const packageName = command.split(" ").pop() || ""
  const isComingSoon = comingSoonPackages.includes(packageName)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCopy = async () => {
    if (isComingSoon) return
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <div
      className={`group relative rounded-xl w-full max-w-3xl transition-all duration-500 overflow-hidden
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        hover:scale-[1.02] hover:-translate-y-1`}
      style={{
        background: "rgba(300, 300, 350, 0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 6px 24px rgba(0,0,0,0.12), 0 1px 6px rgba(0,0,0,0.06)",
        minHeight: "200px", // Fixed minimum height for uniformity
      }}
    >
      {/* Hover overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-black/5 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 h-full flex flex-col">
        {/* Header Section - Fixed Height */}
        <div className="flex-shrink-0 p-6 pb-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300 font-mono line-clamp-1">
              {title}
            </h3>

            {isComingSoon && (
              <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs md:text-sm font-medium rounded-full border border-gray-300 flex-shrink-0">
                Coming Soon
              </span>
            )}
          </div>
        </div>

        {/* Description Section - Fixed Height with Overflow Handling */}
        <div className="flex-1 px-6 pb-3">
          <div className="h-12 flex items-start">
            {" "}
            {/* Fixed height container */}
            <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium font-mono line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        {/* Terminal Section - Fixed at Bottom */}
        <div className="flex-shrink-0 p-6 pt-0">
          <div className="rounded-lg border border-gray-300/60 group-hover:border-gray-400/80 overflow-hidden transition-all duration-300">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-3 py-2 bg-gray-900">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-gray-500" />
                <span className="h-2 w-2 rounded-full bg-gray-400" />
                <span className="h-2 w-2 rounded-full bg-gray-300" />
              </div>
              <span className="text-xs text-gray-400 font-mono hidden sm:inline">terminal</span>
            </div>

            {/* Command */}
            <div className="flex items-center bg-black h-12">
              {" "}
              {/* Fixed height for command area */}
              <div className="flex-1 min-w-0">
                <pre className="text-gray-100 font-mono text-xs sm:text-sm font-semibold px-3 py-2 truncate">
                  <span className="text-gray-500">$</span> {isComingSoon ? `npx devark add ${packageName}` : command}
                </pre>
              </div>
              {/* Copy Button */}
              <div className="flex-shrink-0 px-2">
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-1 px-2 py-1.5 rounded-md transition-all duration-300 ${
                    isComingSoon
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-gray-800 active:bg-gray-700 border border-gray-600 hover:border-gray-500 active:scale-95"
                  }`}
                  aria-label="Copy command"
                  disabled={isComingSoon}
                >
                  {isComingSoon ? (
                    <span className="text-xs font-mono text-gray-400">Soon</span>
                  ) : copied ? (
                    <Check size={12} className="text-green-400" />
                  ) : (
                    <ClipboardCopy size={12} className="text-gray-300" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
