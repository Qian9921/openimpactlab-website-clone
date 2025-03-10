
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Supporters = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 px-4 bg-white"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 
          className={`text-2xl font-bold text-gray-800 mb-10 opacity-0 transition-opacity duration-700 ${
            isVisible ? 'opacity-100' : ''
          }`}
        >
          Thank You To Our Generous Supporters
        </h2>
        
        <div 
          className={`flex flex-wrap justify-center items-center gap-8 mb-10 opacity-0 transition-opacity duration-700 delay-200 ${
            isVisible ? 'opacity-100' : ''
          }`}
        >
          {/* Supporter logos */}
          <div className="grayscale hover:grayscale-0 transition-all duration-300 h-8">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" 
              alt="Microsoft" 
              className="h-full"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all duration-300 h-8">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
              alt="Google" 
              className="h-full"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all duration-300 h-8">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
              alt="Netflix" 
              className="h-full"
            />
          </div>
          <div className="grayscale hover:grayscale-0 transition-all duration-300 h-8">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
              alt="Apple" 
              className="h-full"
            />
          </div>
        </div>
        
        <div 
          className={`opacity-0 transition-opacity duration-700 delay-400 ${
            isVisible ? 'opacity-100' : ''
          }`}
        >
          <Link 
            to="/donate"
            className="px-8 py-3 border-2 border-brand-blue text-brand-blue rounded-full font-medium btn-hover inline-block"
          >
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Supporters;
