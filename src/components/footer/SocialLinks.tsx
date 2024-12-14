import React from 'react';
import { Instagram } from 'lucide-react';

interface SocialLinksProps {
  social: {
    instagram: string;
    tiktok: string;
    pinterest: string;
  };
}

const SocialLinks: React.FC<SocialLinksProps> = ({ social }) => {
  return (
    <div className="flex gap-4">
      <a
        href={social.instagram}
        className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
      >
        <Instagram size={20} />
      </a>
      {/* Custom TikTok Icon */}
      <a
        href={social.tiktok}
        className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on TikTok"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      </a>
      {/* Custom Pinterest Icon */}
      <a
        href={social.pinterest}
        className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Pinterest"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;