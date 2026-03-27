import { Link } from "react-router-dom";
import { Button } from "./Button";
import { cn } from "../../utils/cn";

interface CTASectionProps {
  title: string;
  text: string;
  buttonText: string;
  buttonLink?: string;
  variant?: "primary" | "dark" | "whatsapp";
  className?: string;
}

export function CTASection({
  title,
  text,
  buttonText,
  buttonLink = "/contato",
  variant = "dark",
  className
}: CTASectionProps) {
  return (
    <section className={cn(
      "py-20",
      variant === "dark" ? "bg-zinc-900 text-white" : "bg-red-600 text-white",
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">{text}</p>
        <Link to={buttonLink}>
          <Button 
            size="lg" 
            variant={variant === "whatsapp" ? "whatsapp" : (variant === "dark" ? "primary" : "secondary")}
            className={variant === "dark" ? "" : "bg-white text-red-600 hover:bg-zinc-100"}
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
}
