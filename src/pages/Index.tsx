
import { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Mission from '../components/Mission';
import Testimonial from '../components/Testimonial';
import Features from '../components/Features';
import Newsletter from '../components/Newsletter';
import Supporters from '../components/Supporters';

const Index = () => {
  // Smooth scroll to element if hash is present in URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <MainLayout>
      <Hero />
      <Stats />
      <Mission />
      <Testimonial />
      <Features />
      <Newsletter />
      <Supporters />
    </MainLayout>
  );
};

export default Index;
