
import { useState, useEffect, useRef } from 'react';

const StatCard = ({ 
  percentage, 
  text, 
  index 
}: { 
  percentage: string; 
  text: string;
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`stat-card opacity-0 transform translate-y-10 transition-all duration-700 delay-${index * 200} ${
        isVisible ? 'opacity-100 translate-y-0' : ''
      }`}
    >
      <div className="mb-4">
        <span className="text-5xl font-bold text-brand-blue">{percentage}</span>
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

const Stats = () => {
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
      className="py-20 px-4 bg-gray-50"
    >
      <div className="container mx-auto">
        <h2 
          className={`text-center text-3xl font-bold mb-16 text-gray-800 opacity-0 transition-opacity duration-700 ${
            isVisible ? 'opacity-100' : ''
          }`}
        >
          BUILDING CONFIDENCE, CONNECTIONS, AND COMMUNITY
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard 
            percentage="83%" 
            text="of students who report increased engagement in AI projects through our program"
            index={0}
          />
          <StatCard 
            percentage="80%" 
            text="of students gain skills in technical collaboration with AI tools through our projects"
            index={1}
          />
          <StatCard 
            percentage="73%" 
            text="of students report an increase in their inclination to participate in future AI initiatives"
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
