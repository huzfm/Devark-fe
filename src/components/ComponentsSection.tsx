import { Tabs, TabsContent } from "@/components/ui/tabs";
import ComponentCard from "./ComponentCard";
import { components } from "../utils/data";

export default function ComponentsSection() {
  return (
    <section id="components" className="relative py-20 px-4 bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:35px_35px]" />
      {/* Background Blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
            <span className="text-sm font-medium text-white/90">
              Ready to Use Components
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Browse Components
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-mono">
            Copy and paste production-ready components into your project. Each
            component is crafted with care and optimized for performance.
          </p>
        </div>

        {/* Cards */}
        <Tabs
          defaultValue="all"
          className="w-full px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
        >
          <TabsContent value="all" className="mt-8 bg-transparent border-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {components.map((component, index) => (
                <div
                  key={component.id}
                  className="opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <ComponentCard
                    title={component.title}
                    description={component.description}
                    command={component.command}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
