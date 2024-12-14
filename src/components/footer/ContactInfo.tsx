import React from 'react';

interface ContactInfoProps {
  contact: {
    title: string;
    address: string;
    email: string;
    phone: string;
  };
}

const ContactInfo: React.FC<ContactInfoProps> = ({ contact }) => {
  return (
    <div>
      <h3 className="text-xl font-playfair mb-6">{contact.title}</h3>
      <div className="space-y-4 text-gray-300">
        <p>{contact.address}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
    </div>
  );
};

export default ContactInfo;