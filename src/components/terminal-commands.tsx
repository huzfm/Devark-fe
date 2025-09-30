"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useMemo } from "react"

type Props = {
  pkg: string
}

function buildCommands(pkg: string) {
  return {
    pnpm: `pnpm add ${pkg}`,
    yarn: `yarn add ${pkg}`,
    npm: `npm install ${pkg}`,
  }
}

export default function TerminalCommands({ pkg }: Props) {
  const commands = useMemo(() => buildCommands(pkg), [pkg])

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // no-op
    }
  }

  return (
    <div className="w-full">
      <Tabs defaultValue="pnpm" className="w-full">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          <TabsTrigger value="yarn">yarn</TabsTrigger>
          <TabsTrigger value="npm">npm</TabsTrigger>
        </TabsList>

        <TabsContent value="pnpm" className="mt-4">
          <CommandRow cmd={commands.pnpm} onCopy={() => copy(commands.pnpm)} />
        </TabsContent>
        <TabsContent value="yarn" className="mt-4">
          <CommandRow cmd={commands.yarn} onCopy={() => copy(commands.yarn)} />
        </TabsContent>
        <TabsContent value="npm" className="mt-4">
          <CommandRow cmd={commands.npm} onCopy={() => copy(commands.npm)} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function CommandRow({ cmd, onCopy }: { cmd: string; onCopy: () => void }) {
  return (
    <div className="flex items-stretch gap-2">
      <pre
        aria-label="installation command"
        className="flex-1 rounded-md bg-muted text-foreground/90 px-4 py-3 overflow-x-auto"
      >
        <code>{cmd}</code>
      </pre>
      <Button variant="secondary" onClick={onCopy} aria-label="Copy command">
        Copy
      </Button>
    </div>
  )
}
