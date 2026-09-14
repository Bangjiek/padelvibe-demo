import { useEffect } from 'react';
import { siteConfig } from '@/data/site';

interface SeoProps {
  title: string;
  description: string;
  path: string;
}

export default function Seo({ title, description, path }: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${siteConfig.brand.name}`;
    document.title = fullTitle;

    const ensureMeta = (selector: string, attr: string, value: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    ensureMeta('meta[name="description"]', 'name', 'description', description);
    ensureMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    ensureMeta('meta[property="og:description"]', 'property', 'og:description', description);
    ensureMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    ensureMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    ensureMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
  }, [title, description, path]);

  return null;
}
