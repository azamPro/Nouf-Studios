import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface ContactInfoProps {
  info: {
    title: string;
    address: string;
    email: string;
    phone: string;
    hours: string;
  };
}

const ContactInfo: React.FC<ContactInfoProps> = ({ info }) => {
  const { dir } = useLanguage();
  
  return (
    <div className={`bg-gray-50 rounded-2xl p-8 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
      <h3 className="text-xl font-playfair mb-6">{info.title}</h3>
      
      <div className="space-y-6">
        <div className={`flex items-start gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          <MapPin className="w-6 h-6 text-gray-400" />
          <p className="text-gray-600">{info.address}</p>
        </div>

        <div className={`flex items-center gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          <Mail className="w-6 h-6 text-gray-400" />
          <a href={`mailto:${info.email}`} className="text-gray-600 hover:text-black transition-colors">
            {info.email}
          </a>
        </div>

        <div className={`flex items-center gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          <Phone className="w-6 h-6 text-gray-400" />
          <a href={`tel:${info.phone}`} className="text-gray-600 hover:text-black transition-colors">
            {info.phone}
          </a>
        </div>

        <div className={`flex items-center gap-4 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          <Clock className="w-6 h-6 text-gray-400" />
          <p className="text-gray-600">{info.hours}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;