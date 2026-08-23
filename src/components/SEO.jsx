import { useEffect } from 'react';

/**
 * Lightweight SEO & Dynamic Meta Manager Component
 * Ensures every route has dedicated title, meta description, and canonical URL
 * without requiring heavy external dependencies.
 */
export default function SEO({
  title = 'TheHomeIT (Homeit) — Smart Society Management & Emergency Response App',
  description = "TheHomeIT (Homeit) is India's leading smart society management app at thehomeit.com. Automate visitor gate security, maintenance billing, and emergency alerts.",
  keywords = 'TheHomeIT, thehomeit, thehomeit.com, Homeit, homeit, society management app, housing society software India, apartment security app',
  canonical = 'https://thehomeit.com/',
  ogTitle,
  ogDescription,
  ogImage = 'https://thehomeit.com/og-image.png'
}) {
  useEffect(() => {
    // 1. Document Title
    document.title = title;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // 4. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // 5. OpenGraph Tags
    const setMetaTag = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMetaTag('og:title', ogTitle || title);
    setMetaTag('og:description', ogDescription || description);
    setMetaTag('og:url', canonical);
    setMetaTag('og:image', ogImage);

    // 6. Twitter Tags
    const setTwitterTag = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setTwitterTag('twitter:title', ogTitle || title);
    setTwitterTag('twitter:description', ogDescription || description);
    setTwitterTag('twitter:image', ogImage);

  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage]);

  return null;
}
