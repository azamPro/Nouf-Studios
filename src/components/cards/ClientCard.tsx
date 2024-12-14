import React from 'react';
import { getOptimizedImageUrl } from '../../utils/imageLoader';

interface ClientCardProps {
  name: string;
  role: string;
  avatar: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ name, role, avatar }) => {
  return (
    <div className="relative flex flex-col h-[400px] bg-gray-50">
      <div className="flex-1">
        <img
          src={getOptimizedImageUrl(avatar)}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-6 backdrop-blur-sm">
        <h3 className="text-xl font-playfair text-white">{name}</h3>
        <p className="text-sm text-gray-300 mt-1">{role}</p>
      </div>
    </div>
  );
};

export default ClientCard;