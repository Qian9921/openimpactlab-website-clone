
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
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
      className="relative py-16 px-4 bg-gray-100"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Students in classroom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue/70"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="bg-white/95 rounded-xl p-8 md:p-12 shadow-lg">
          <div 
            className={`mb-8 opacity-0 transition-opacity duration-700 delay-100 ${
              isVisible ? 'opacity-100' : ''
            }`}
          >
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Driving AI Innovation with Diverse Perspectives</h2>
            <p className="text-gray-700">
              At OpenImpactLab, we believe in the transformative power of bringing together diverse perspectives to advance AI development. Our innovative programs create pathways for students from all backgrounds to collaborate with industry professionals on real-world AI projects that address meaningful challenges.
            </p>
          </div>
          
          <div 
            className={`flex flex-col sm:flex-row items-center gap-4 opacity-0 transition-opacity duration-700 delay-300 ${
              isVisible ? 'opacity-100' : ''
            }`}
          >
            <Link to="/about" className="px-6 py-3 bg-brand-blue text-white rounded-full font-medium btn-hover">
              About
            </Link>
            <Link to="/programs" className="px-6 py-3 border-2 border-brand-blue text-brand-blue rounded-full font-medium btn-hover">
              See Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
