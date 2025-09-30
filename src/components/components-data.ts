export type CatalogItem = {
  name: string
  pkg: string
  description?: string
  available: boolean
}

export const availableComponents: CatalogItem[] = [
  { name: "Button", pkg: "@acme/ui-button", description: "Accessible, themeable button component.", available: true },
  {
    name: "Card",
    pkg: "@acme/ui-card",
    description: "Composable card with header, content, and footer.",
    available: true,
  },
  { name: "Tabs", pkg: "@acme/ui-tabs", description: "A11y-first tabs built on Roving Focus.", available: true },
  {
    name: "Tooltip",
    pkg: "@acme/ui-tooltip",
    description: "Lightweight, accessible tooltip with portal.",
    available: true,
  },
]

export const comingSoonComponents: CatalogItem[] = [
  {
    name: "Date Picker",
    pkg: "@acme/ui-date-picker",
    description: "Select single or range dates with keyboard support.",
    available: false,
  },
  {
    name: "Rich Text Editor",
    pkg: "@acme/ui-editor",
    description: "Modern editor with slash commands and formatting.",
    available: false,
  },
  {
    name: "Data Table",
    pkg: "@acme/ui-data-table",
    description: "Powerful table with sorting and filtering.",
    available: false,
  },
]
