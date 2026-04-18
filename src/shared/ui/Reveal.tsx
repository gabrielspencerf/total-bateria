import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../../utils/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * Entrada suave ao entrar na viewport (IntersectionObserver).
 * Respeita `motion-reduce`: sem animação, conteúdo já visível.
 */
export function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "motion-reduce:translate-y-0 motion-reduce:opacity-100",
        visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
        "transform-gpu transition-[opacity,transform] duration-300 ease-out",
        className,
      )}
    >
      {children}
    </div>
  );
}
