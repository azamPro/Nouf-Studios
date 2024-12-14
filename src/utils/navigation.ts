import { content } from '../data/content';

type NavigationMap = {
  [key: string]: string;
};

// Create bidirectional mapping for navigation links
export const getNavigationMap = (language: 'en' | 'ar'): NavigationMap => {
  const englishLinks = content.en.navbar.links;
  const arabicLinks = content.ar.navbar.links;
  
  const navigationMap: NavigationMap = {};
  
  // Map Arabic links to their English counterparts
  arabicLinks.forEach((arabicLink, index) => {
    navigationMap[arabicLink.toLowerCase()] = englishLinks[index].toLowerCase();
  });

  // Map English links to themselves
  englishLinks.forEach(link => {
    navigationMap[link.toLowerCase()] = link.toLowerCase();
  });

  return navigationMap;
};