
import { useState, useEffect, useRef } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Add your newsletter subscription logic here
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <section 
      ref={sectionRef}
      className="newsletter-gradient py-16 px-4"
    >
      <div 
        className={`container mx-auto max-w-3xl text-center opacity-0 transform translate-y-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : ''
        }`}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Stay Informed and Inspired through OpenImpactLab's newsletter.
        </h2>
        <p className="text-gray-600 mb-8">
          Get the latest updates on programs, events, and success stories.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-brand-blue text-white rounded-full font-medium btn-hover"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
