"use client";

import { useMemo, useState } from "react";
import { availableComponents, comingSoonComponents, type CatalogItem } from "./components-data";
import TerminalCommands from "./terminal-commands";

export default function ComponentsSection() {
  const [selected, setSelected] = useState<CatalogItem>(availableComponents[0]);

  const all = useMemo(
    () => ({
      available: availableComponents,
      comingSoon: comingSoonComponents,
    }),
    []
  );

  return (
    <section id="components" aria-labelledby="components-title" className="w-full relative">
      {/* Background grid overlay */}
<div
  className="absolute inset-0 pointer-events-none bg-[length:35px_35px] bg-[linear-gradient(rgba(255,255,255,0.08)_1px\,transparent_1px),linear-gradient(90deg\,rgba(255,255,255,0.08)_1px\,transparent_1px)]"
  aria-hidden="true"
/>


      <div className="mx-auto container py-10 md:py-16 relative z-10">
        {/* Header */}
        <header className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs text-foreground/80">Components Catalog</span>
          </div>
          <h2 id="components-title" className="mt-4 text-balance text-3xl md:text-4xl font-bold">
            Browse components and install with one command
          </h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Pick a component on the left. Installation commands for pnpm, yarn, and npm will appear on the right.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
          {/* Sidebar */}
          <aside aria-label="Components list" className="rounded-lg border border-border bg-card overflow-hidden">
            {/* Available Components */}
            <div className="p-4 border-b border-border">
              <h3 className="text-sm font-semibold text-foreground/80">Available</h3>
              <ul className="mt-3 space-y-1">
                {all.available.map((item) => (
                  <li key={item.name}>
                    <button
                      type="button"
                      onClick={() => setSelected(item)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selected.name === item.name ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                      }`}
                      aria-current={selected.name === item.name ? "true" : "false"}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{item.name}</span>
                        <span className="ml-2 text-xs text-muted-foreground">ready</span>
                      </div>
                      {item.description && (
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coming Soon Components */}
            <div className="p-4">
              <h3 className="text-sm font-semibold text-foreground/80">Coming Soon</h3>
              <ul className="mt-3 space-y-1">
                {all.comingSoon.map((item) => (
                  <li key={item.name}>
                    <button
                      type="button"
                      onClick={() => setSelected(item)}
                      className="w-full text-left px-3 py-2 rounded-md transition-colors opacity-75 hover:bg-muted"
                      aria-current={selected.name === item.name ? "true" : "false"}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{item.name}</span>
                        <span className="ml-2 text-xs text-muted-foreground">soon</span>
                      </div>
                      {item.description && (
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main detail panel */}
          <main className="rounded-lg border border-border bg-card p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">{selected.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {selected.available
                    ? `Install the ${selected.name} package using your preferred package manager.`
                    : `${selected.name} is coming soon. You can preview the install command, but it may not be published yet.`}
                </p>
              </div>
              <span className="ml-0 md:ml-2 mt-2 md:mt-0 text-xs font-semibold">
                {selected.available ? "Available" : "Coming Soon"}
              </span>
            </div>

            <div className="mt-6">
              <TerminalCommands pkg={selected.pkg} />
            </div>

            {selected.description && (
              <p className="mt-6 text-sm text-muted-foreground">{selected.description}</p>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}
