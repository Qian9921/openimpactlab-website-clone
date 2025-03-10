
import { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <section className="relative hero-gradient min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 pattern-dots opacity-30"></div>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About OpenImpactLab</h1>
          <div className="h-1 w-20 bg-white/50 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Bridging the gap between students and real-world AI innovation
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              OpenImpactLab began with a simple observation: while AI technology was advancing rapidly, 
              access to meaningful educational experiences in this field remained limited and unequal. 
              Founded by a group of technology professionals and educators passionate about democratizing AI education, 
              we set out to create a platform that would make industry-relevant skills accessible to all students.
            </p>
            <p className="text-lg text-gray-700">
              Since our founding, we've partnered with leading organizations and educational institutions 
              to develop project-based learning experiences that bridge the gap between classroom theory 
              and industry practice, with a focus on creating real-world impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To equip students, regardless of background, with Industry 5.0 skills through real-world projects, 
                enabling organizations to access diverse talent, drive innovation, and unite for a more equitable, 
                AI-driven future.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-brand-green mb-4">Our Vision</h3>
              <p className="text-gray-700">
                A future where technology education empowers all students to be Industry 5.0 leaders, 
                driving positive change through collaboration with the social sector.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Our Approach</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-brand-blue text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Real-World Projects</h3>
                <p className="text-gray-600">
                  We connect students with actual challenges from organizations, ensuring learning has immediate real-world relevance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-brand-green text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Inclusive Access</h3>
                <p className="text-gray-600">
                  We design our programs to be accessible to students from all backgrounds and educational levels.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-brand-blue text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Industry Partnership</h3>
                <p className="text-gray-600">
                  We collaborate with technology leaders to ensure our projects reflect current industry practices and needs.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/team" className="px-8 py-3 bg-brand-blue text-white rounded-full font-medium btn-hover inline-block">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
