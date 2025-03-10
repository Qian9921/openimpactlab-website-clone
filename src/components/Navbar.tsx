
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-brand-blue font-bold text-2xl">OpenImpactLab</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/programs" className="nav-link">Programs</Link>
          <Link to="/team" className="nav-link">Our Team</Link>
          <Link to="/volunteer" className="nav-link">Volunteer</Link>
          <Link to="/resources" className="nav-link">Resources</Link>
          <Link to="/news" className="nav-link">News</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6 text-brand-blue" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-4 py-2 space-y-3">
            <Link to="/about" className="block py-2 nav-link">About Us</Link>
            <Link to="/programs" className="block py-2 nav-link">Programs</Link>
            <Link to="/team" className="block py-2 nav-link">Our Team</Link>
            <Link to="/volunteer" className="block py-2 nav-link">Volunteer</Link>
            <Link to="/resources" className="block py-2 nav-link">Resources</Link>
            <Link to="/news" className="block py-2 nav-link">News</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
