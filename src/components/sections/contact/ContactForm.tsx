import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';

interface ContactFormProps {
  form: {
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
  };
}

const ContactForm: React.FC<ContactFormProps> = ({ form }) => {
  const { dir } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          {form.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          {form.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          {form.phone}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          {form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
        />
      </div>

      <button
        type="submit"
        className="w-full px-8 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-colors"
      >
        {form.submit}
      </button>
    </form>
  );
};

export default ContactForm;