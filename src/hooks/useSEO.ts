import { useEffect } from 'react';
import { SITE_CONFIG } from '@/config/site';

interface UseSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
  ogTitle?: string;
  ogDescription?: string;
  noIndex?: boolean;
}

function upsertMetaByName(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

function removeMetaByName(name: string) {
  const meta = document.querySelector(`meta[name="${name}"]`);
  if (meta) {
    meta.remove();
  }
}

function upsertMetaByProperty(property: string, content: string) {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }

  link.setAttribute('href', href);
}

export function useSEO({ title, description, keywords, path, image, ogTitle, ogDescription, noIndex }: UseSEOProps) {
  useEffect(() => {
    const fullTitle = title;
    const fullOgTitle = ogTitle ?? title;
    const fullOgDescription = ogDescription ?? description;
    const canonicalPath = path ?? window.location.pathname;
    const canonicalUrl = new URL(canonicalPath, SITE_CONFIG.baseUrl).toString();
    const imageUrl = new URL(image ?? SITE_CONFIG.defaultImage, SITE_CONFIG.baseUrl).toString();

    document.title = fullTitle;
    upsertMetaByName('description', description);
    upsertMetaByName('robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    if (keywords?.length) {
      upsertMetaByName('keywords', keywords.join(', '));
    } else {
      removeMetaByName('keywords');
    }

    upsertMetaByProperty('og:title', fullOgTitle);
    upsertMetaByProperty('og:description', fullOgDescription);
    upsertMetaByProperty('og:type', 'website');
    upsertMetaByProperty('og:url', canonicalUrl);
    upsertMetaByProperty('og:image', imageUrl);
    upsertMetaByProperty('og:locale', SITE_CONFIG.locale);

    upsertMetaByName('twitter:card', 'summary_large_image');
    upsertMetaByName('twitter:title', fullOgTitle);
    upsertMetaByName('twitter:description', fullOgDescription);
    upsertMetaByName('twitter:image', imageUrl);

    upsertLink('canonical', canonicalUrl);
  }, [description, image, keywords, noIndex, ogDescription, ogTitle, path, title]);
}
