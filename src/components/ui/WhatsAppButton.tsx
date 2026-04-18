import { MessageCircle } from "lucide-react";
import { cn } from "../../utils/cn";
import { Button } from "./Button";
import { buildWhatsAppLink } from "../../shared/brand";

interface WhatsAppButtonProps {
  number: string;
  text?: string;
  className?: string;
  floating?: boolean;
}

export function WhatsAppButton({ number, text = "Falar no WhatsApp", className, floating = false }: WhatsAppButtonProps) {
  const link = buildWhatsAppLink(number);

  if (floating) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300",
          className
        )}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-block", className)}
    >
      <Button variant="whatsapp" className="w-full">
        <MessageCircle className="w-5 h-5 mr-2" />
        {text}
      </Button>
    </a>
  );
}
