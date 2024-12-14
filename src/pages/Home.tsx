import React from 'react';
import Hero from '../components/sections/Hero';
import Story from '../components/sections/Story';
import Testimonials from '../components/sections/Testimonials';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';
import Instagram from '../components/sections/Instagram';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Story />
      <Testimonials />
      <Services />
      <Projects />
      <Instagram />
      <Contact />
    </main>
  );
};

export default Home;