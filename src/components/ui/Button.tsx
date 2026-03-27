import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/cn";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp" | "glass" | "dark";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={cn(
          "relative overflow-hidden group inline-flex items-center justify-center rounded-md font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-red-600 text-white hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:-translate-y-0.5": variant === "primary",
            "bg-zinc-900 text-white hover:bg-zinc-800 hover:shadow-[0_0_20px_rgba(24,24,27,0.4)] hover:-translate-y-0.5": variant === "secondary" || variant === "dark",
            "border-2 border-zinc-200 bg-transparent hover:border-red-600 hover:text-red-600 text-zinc-900": variant === "outline",
            "hover:bg-zinc-100 text-zinc-900": variant === "ghost",
            "bg-green-600 text-white hover:bg-green-700 hover:shadow-[0_0_20px_rgba(22,163,74,0.4)] hover:-translate-y-0.5": variant === "whatsapp",
            "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-0.5": variant === "glass",
            "h-10 px-5 text-sm": size === "sm",
            "h-12 px-8 text-base": size === "md",
            "h-14 px-10 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {/* Hover Sweep Effect */}
        {(variant === "primary" || variant === "secondary" || variant === "dark" || variant === "whatsapp" || variant === "glass") && (
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        )}
        
        {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        <span className="relative z-10 flex items-center">{children}</span>
      </button>
    );
  }
);
Button.displayName = "Button";
