
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: 'project' | 'event' | 'announcement';
}

const NewsCard = ({ 
  title, 
  date, 
  excerpt, 
  image, 
  category 
}: Omit<NewsItem, 'id'>) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-center mb-3">
        <span className={`text-xs font-medium px-3 py-1 rounded-full ${
          category === 'project' 
            ? 'bg-brand-blue/10 text-brand-blue' 
            : category === 'event' 
              ? 'bg-brand-green/10 text-brand-green' 
              : 'bg-brand-yellow/10 text-brand-yellow'
        }`}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </span>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link 
        to="/news" 
        className="inline-flex items-center text-sm font-medium text-brand-blue hover:underline"
      >
        Read More
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  </div>
);

const News = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "OpenImpactLab Partners with City Schools for AI Education Initiative",
      date: "June 15, 2023",
      excerpt: "New partnership will bring AI curriculum to 15 underserved schools, reaching over 500 students in the upcoming academic year.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "announcement"
    },
    {
      id: 2,
      title: "Student Project Spotlight: AI-Powered Water Quality Monitoring System",
      date: "May 28, 2023",
      excerpt: "A team of students developed an innovative solution that uses machine learning to analyze water samples and predict contamination risks.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "project"
    },
    {
      id: 3,
      title: "Upcoming Workshop: Ethical Considerations in AI Development",
      date: "May 15, 2023",
      excerpt: "Join us for a hands-on workshop exploring the ethical implications of AI and how to build responsible systems.",
      image: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "event"
    },
    {
      id: 4,
      title: "OpenImpactLab Secures Funding to Expand Rural AI Education Programs",
      date: "April 30, 2023",
      excerpt: "New grant will support the expansion of our programs to rural communities, with a focus on agricultural and environmental applications of AI.",
      image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "announcement"
    },
    {
      id: 5,
      title: "Student Team Presents AI Healthcare Solution at Global Conference",
      date: "April 12, 2023",
      excerpt: "OpenImpactLab students showcase their innovative medical diagnostics tool at the International Health Tech Summit.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "project"
    },
    {
      id: 6,
      title: "Annual AI for Social Good Hackathon Announced",
      date: "March 25, 2023",
      excerpt: "Registration is now open for our annual hackathon challenging participants to develop AI solutions for community challenges.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "event"
    },
  ];

  const filteredNews = activeFilter === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeFilter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <section className="relative hero-gradient min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 pattern-dots opacity-30"></div>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">News & Updates</h1>
          <div className="h-1 w-20 bg-white/50 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay informed about our latest projects, events, and announcements
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'all' 
                    ? 'bg-brand-blue text-white' 
                    : 'text-gray-700 hover:text-brand-blue'
                }`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'project' 
                    ? 'bg-brand-blue text-white' 
                    : 'text-gray-700 hover:text-brand-blue'
                }`}
                onClick={() => setActiveFilter('project')}
              >
                Projects
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'event' 
                    ? 'bg-brand-blue text-white' 
                    : 'text-gray-700 hover:text-brand-blue'
                }`}
                onClick={() => setActiveFilter('event')}
              >
                Events
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'announcement' 
                    ? 'bg-brand-blue text-white' 
                    : 'text-gray-700 hover:text-brand-blue'
                }`}
                onClick={() => setActiveFilter('announcement')}
              >
                Announcements
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredNews.map(item => (
              <NewsCard 
                key={item.id}
                title={item.title}
                date={item.date}
                excerpt={item.excerpt}
                image={item.image}
                category={item.category}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-3 border-2 border-brand-blue text-brand-blue rounded-full font-medium btn-hover">
              Load More News
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">Stay Connected</h2>
          <p className="text-lg text-gray-700 mb-8">
            Subscribe to our newsletter to receive the latest updates, stories, and opportunities from OpenImpactLab.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
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
    </MainLayout>
  );
};

export default News;
