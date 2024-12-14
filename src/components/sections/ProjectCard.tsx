import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getOptimizedImageUrl } from '../../utils/imageLoader';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, category }) => {
  const { dir } = useLanguage();
  
  return (
    <article className={`${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={getOptimizedImageUrl(image)}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-8 bg-gray-50">
        <span className="text-sm text-gray-500 tracking-wider uppercase">{category}</span>
        <h3 className="text-xl font-playfair text-black mt-2">{title}</h3>
        <p className="mt-4 text-gray-600 line-clamp-3">{description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;