import React from 'react';

interface QuickLinksProps {
  title: string;
  links: string[];
}

const QuickLinks: React.FC<QuickLinksProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-xl font-playfair mb-6">{title}</h3>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;