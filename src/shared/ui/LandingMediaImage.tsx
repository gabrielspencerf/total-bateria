import { useCallback, useEffect, useMemo, useState, type ImgHTMLAttributes, type SyntheticEvent } from "react";
import { landingMediaFallbackUrl, resolvePublicUrl } from "../../utils/publicAsset";

export interface LandingMediaImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string;
  /** Opcional: tentar antes do fallback global (`hero-industrial.svg`). */
  fallbackSrc?: string;
}

function buildUrlChain(primary: string, fallback: string | null, globalFb: string): string[] {
  const chain: string[] = [primary];
  if (fallback && fallback !== chain[chain.length - 1]) {
    chain.push(fallback);
  }
  if (globalFb !== chain[chain.length - 1]) {
    chain.push(globalFb);
  }
  return chain;
}

/**
 * Imagem estática em `public/` com `import.meta.env.BASE_URL` aplicado.
 * Em erro de carregamento, avança na cadeia: `src` → `fallbackSrc?` → hero industrial.
 */
export function LandingMediaImage({ src, fallbackSrc, onError, ...rest }: LandingMediaImageProps) {
  const primary = resolvePublicUrl(src);
  const fallbackResolved = fallbackSrc ? resolvePublicUrl(fallbackSrc) : null;
  const globalFallback = landingMediaFallbackUrl();
  const chain = useMemo(
    () => buildUrlChain(primary, fallbackResolved, globalFallback),
    [primary, fallbackResolved, globalFallback],
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [src]);

  const safeIndex = Math.min(index, chain.length - 1);
  const resolvedUrl = chain[safeIndex] ?? globalFallback;

  const handleError = useCallback(
    (e: SyntheticEvent<HTMLImageElement>) => {
      setIndex((i) => {
        const next = i + 1;
        if (next >= chain.length) {
          onError?.(e);
          return i;
        }
        return next;
      });
    },
    [chain.length, onError],
  );

  return <img {...rest} src={resolvedUrl} onError={handleError} />;
}
