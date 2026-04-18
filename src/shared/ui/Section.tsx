import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { uiTokens } from "./tokens";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  spacing?: "default" | "compact";
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  spacing = "default",
}: SectionProps) {
  return (
    <section id={id} className={cn(uiTokens.sectionSpacing[spacing], className)}>
      <div className={cn(uiTokens.container, containerClassName)}>{children}</div>
    </section>
  );
}
