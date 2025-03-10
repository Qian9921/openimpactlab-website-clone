
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Mission = () => {
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
      className="py-16 px-4 bg-brand-blue text-white"
    >
      <div 
        className={`container mx-auto max-w-3xl text-center opacity-0 transform translate-y-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : ''
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-medium mb-8">
          OPENIMPACTLAB'S MISSION is to equip students, regardless of background, with Industry 5.0 skills through real-world projects, enabling organizations to access diverse talent, drive innovation, and unite for a more equitable, AI-driven future.
        </h2>
        <div className="flex justify-center">
          <Link 
            to="/about" 
            className="px-8 py-3 bg-white text-brand-blue rounded-full font-medium btn-hover"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Mission;
