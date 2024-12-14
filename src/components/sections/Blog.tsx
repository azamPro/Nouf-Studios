import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import FadeInSection from '../animations/FadeInSection';

const Blog = () => {
  const { dir } = useLanguage();

  const posts = [
    {
      title: 'The Art of Minimalist Design',
      excerpt: 'Discover how less can be more in modern interior design...',
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80',
      date: '2024-02-15',
    },
    {
      title: 'Color Psychology in Interior Design',
      excerpt: 'Understanding how colors affect mood and perception...',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
      date: '2024-02-10',
    },
    {
      title: 'Sustainable Design Practices',
      excerpt: 'Creating beautiful spaces while protecting our environment...',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80',
      date: '2024-02-05',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair mb-4">Latest Insights</h2>
            <p className="text-gray-600">Stay updated with our design thoughts and inspiration</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-[4/3] object-cover transform transition-transform duration-300 group-hover:-translate-y-2"
                    loading="lazy"
                  />
                </div>
                <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
                  <time className="text-sm text-gray-500">{post.date}</time>
                  <h3 className="mt-2 text-xl font-playfair">{post.title}</h3>
                  <p className="mt-2 text-gray-600">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Blog;