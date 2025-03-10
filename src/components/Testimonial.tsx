
import { useState, useEffect, useRef } from 'react';

const Testimonial = () => {
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
      className="testimonial-gradient py-16 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div 
            className={`md:w-1/3 mb-8 md:mb-0 opacity-0 transition-opacity duration-700 ${
              isVisible ? 'opacity-100' : ''
            }`}
          >
            <div className="w-48 h-48 rounded-full overflow-hidden mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1988&q=80"
                alt="Testimonial" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div 
            className={`md:w-2/3 md:pl-12 opacity-0 transform translate-y-10 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : ''
            }`}
          >
            <p className="text-gray-700 text-lg italic mb-6">
              "OpenImpactLab's program radically transformed my perspective on AI's role in societal change. Working on real-world projects equipped me with technical skills and an understanding of how innovation can create meaningful impact."
            </p>
            
            <div className="flex flex-col">
              <span className="font-bold text-brand-blue">Sophia Chen</span>
              <span className="text-sm text-gray-600">AI Project Lead, Class of 2023</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
