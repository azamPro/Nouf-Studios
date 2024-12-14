import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { FADE_DURATION } from '../../utils/constants';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className = '' }) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-${FADE_DURATION} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;