
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative hero-gradient min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      
      {/* Decorative Elements */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-white/10 animate-pulse-slow"
          style={{
            width: `${Math.random() * 100 + 20}px`,
            height: `${Math.random() * 100 + 20}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 5}s`
          }}
        ></div>
      ))}
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className={`text-4xl md:text-6xl font-bold mb-6 text-white transition-opacity duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Empowering the Next Generation of AI Changemakers
          </h1>
          
          <div 
            className={`max-w-2xl mx-auto mb-10 transition-opacity duration-1000 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="h-1 w-20 bg-white/50 mx-auto mb-10"></div>
            <p className="text-xl text-white/90">
              Join the OpenImpactLab movement, a platform built with students, for the next generation. 
              Our real-world projects equip students for an AI-driven future while creating real impact.
            </p>
          </div>
          
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-opacity duration-1000 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Link to="/journey" 
              className="px-8 py-3 bg-white text-brand-blue rounded-full font-medium btn-hover"
            >
              Start Your AI Journey With Us
            </Link>
            <Link to="/volunteer" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium btn-hover"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
