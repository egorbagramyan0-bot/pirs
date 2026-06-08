import { useEffect } from 'react';

/**
 * Custom hook to dynamically manage page-level SEO meta tags.
 * Updates document.title and target meta tags in the head element on mount/update.
 * 
 * @param {Object} seoOptions
 * @param {string} seoOptions.title - The title to apply to the page.
 * @param {string} seoOptions.description - The meta description text.
 * @param {string} seoOptions.keywords - The comma-separated meta keywords.
 */
export default function useSEO({ title, description, keywords }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }
    }
    
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        metaKeywords.content = keywords;
        document.head.appendChild(metaKeywords);
      }
    }
  }, [title, description, keywords]);
}
