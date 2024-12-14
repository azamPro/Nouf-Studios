import { HEADER_HEIGHT } from './constants';

export const scrollToSection = (sectionId: string, callback?: () => void) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - HEADER_HEIGHT;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    if (callback) {
      callback();
    }
  }
};