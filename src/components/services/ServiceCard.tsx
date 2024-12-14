import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const { dir } = useLanguage();
  
  return (
    <div className="group p-8 bg-gray-50 hover:bg-black transition-colors duration-300 rounded-2xl">
      <div className={`flex ${dir === 'rtl' ? 'flex-row-reverse' : 'flex-row'} items-start gap-4`}>
        <div className="text-black group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-playfair text-black group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="mt-4 text-gray-600 group-hover:text-gray-300 font-inter transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;