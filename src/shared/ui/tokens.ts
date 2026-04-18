export const uiTokens = {
  /** Alinhado ao `max-width` do `.container` em `index.css` (desktop mais aproveitado). */
  container: "container mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8",
  sectionSpacing: {
    default: "py-16 md:py-20",
    compact: "py-12 md:py-14",
  },
  radius: {
    card: "rounded-2xl",
    soft: "rounded-xl",
    pill: "rounded-full",
  },
  surface: {
    card: "border border-zinc-200 bg-white",
    muted: "border border-zinc-200 bg-zinc-50",
    dark: "border border-zinc-800 bg-zinc-900",
  },
  shadow: {
    card: "shadow-sm",
    emphasis: "shadow-lg shadow-zinc-950/10",
  },
  typography: {
    eyebrow: "text-sm font-semibold uppercase tracking-[0.14em]",
    h2: "text-3xl sm:text-4xl font-black leading-tight tracking-tight",
    body: "text-base md:text-lg leading-relaxed",
  },
} as const;
