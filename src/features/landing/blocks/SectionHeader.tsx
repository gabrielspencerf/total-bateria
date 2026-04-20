import { cn } from "../../../utils/cn";
import { uiTokens } from "../../../shared/ui";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, light = false, className }: SectionHeaderProps) {
  return (
    <header className={cn("mb-8 max-w-4xl", className)}>
      {eyebrow && (
        <p className={cn(uiTokens.typography.eyebrow, light ? "text-red-400" : "text-red-600")}>
          {eyebrow}
        </p>
      )}
      <h2 className={cn(uiTokens.typography.h2, "mt-2", light ? "text-white" : "text-zinc-900")}>{title}</h2>
      {description && <p className={cn(uiTokens.typography.body, "mt-4", light ? "text-zinc-300" : "text-zinc-600")}>{description}</p>}
    </header>
  );
}
