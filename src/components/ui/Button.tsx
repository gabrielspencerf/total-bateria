import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/cn";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp" | "glass" | "dark";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const buttonVariantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-red-600 text-white hover:bg-red-700",
  secondary: "bg-zinc-900 text-white hover:bg-zinc-800",
  dark: "bg-zinc-900 text-white hover:bg-zinc-800",
  outline: "border border-zinc-300 bg-transparent text-zinc-900 hover:border-zinc-500",
  ghost: "bg-transparent text-zinc-900 hover:bg-zinc-100",
  whatsapp: "bg-green-800 text-white hover:bg-green-900",
  glass: "border border-white/25 bg-white/10 text-white hover:bg-white/15",
};

const buttonSizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm md:text-base",
  lg: "h-14 px-8 text-base md:text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50",
          buttonVariantClasses[variant],
          buttonSizeClasses[size],
          className,
        )}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
        <span className="inline-flex items-center">{children}</span>
      </button>
    );
  },
);
Button.displayName = "Button";
