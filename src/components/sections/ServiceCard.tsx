import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getOptimizedImageUrl } from '../../utils/imageLoader';

interface ServiceCardProps {
  name: string;
  description: string;
  image: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ name, description, image }) => {
  const { dir } = useLanguage();
  
  return (
    <div className="bg-gray-50 rounded-2xl overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img
          src={getOptimizedImageUrl(image, 600)}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={`p-8 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
        <h3 className="text-xl font-playfair text-black">
          {name}
        </h3>
        <p className="mt-4 text-gray-600 font-inter">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;