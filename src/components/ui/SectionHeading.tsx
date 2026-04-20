import { cn } from "../../utils/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false, className, light = false }: SectionHeadingProps) {
  return (
    <div className={cn("mb-8", centered && "text-center", className)}>
      <div className={cn("flex items-center mb-4", centered && "justify-center flex-col")}>
        {!centered && <div className="w-8 h-1 bg-red-600 rounded-full mr-4" />}
        <h2
          className={cn(
            "text-3xl font-black tracking-tight md:text-4xl",
            light ? "text-white" : "text-zinc-900",
          )}
        >
          {title}
        </h2>
        {centered && <div className="w-16 h-1 bg-red-600 rounded-full mt-4" />}
      </div>
      {subtitle && (
        <p className={cn("text-base md:text-lg max-w-3xl", centered && "mx-auto", light ? "text-zinc-300" : "text-zinc-600")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
