
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const ProgramCard = ({ 
  title, 
  description, 
  image, 
  color = "blue" 
}: { 
  title: string; 
  description: string; 
  image: string;
  color?: "blue" | "green";
}) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className={`text-xl font-bold mb-3 ${color === "blue" ? "text-brand-blue" : "text-brand-green"}`}>{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to="/programs" 
        className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
          color === "blue" 
            ? "bg-brand-blue text-white" 
            : "bg-brand-green text-white"
        } btn-hover`}
      >
        Learn More
      </Link>
    </div>
  </div>
);

const Programs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <section className="relative hero-gradient min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 pattern-dots opacity-30"></div>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Programs</h1>
          <div className="h-1 w-20 bg-white/50 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real-world AI projects that equip students with Industry 5.0 skills while creating meaningful impact
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Featured Programs</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ProgramCard 
              title="AI for Social Good"
              description="Students collaborate with nonprofits to develop AI solutions addressing critical social challenges."
              image="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              color="blue"
            />
            <ProgramCard 
              title="Healthcare Innovation Lab"
              description="A collaborative program where students develop AI tools to improve healthcare access and outcomes."
              image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              color="green"
            />
            <ProgramCard 
              title="Sustainability Tech Challenge"
              description="Students develop AI-powered solutions to environmental challenges facing communities."
              image="https://images.unsplash.com/photo-1497005367839-6e852de72767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              color="green"
            />
            <ProgramCard 
              title="Education Access Initiative"
              description="Projects focused on using AI to make quality education more accessible to underserved communities."
              image="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              color="blue"
            />
          </div>
        </div>
        
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-brand-blue mb-6">Program Structure</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="border-l-4 border-brand-blue pl-4">
                <h3 className="font-bold text-gray-800 mb-2">8-12 Weeks</h3>
                <p className="text-gray-600">Program duration with structured milestones</p>
              </div>
              <div className="border-l-4 border-brand-green pl-4">
                <h3 className="font-bold text-gray-800 mb-2">Expert Mentorship</h3>
                <p className="text-gray-600">Guidance from industry professionals</p>
              </div>
              <div className="border-l-4 border-brand-blue pl-4">
                <h3 className="font-bold text-gray-800 mb-2">Real Impact</h3>
                <p className="text-gray-600">Projects deployed with partner organizations</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/volunteer" className="px-8 py-3 bg-brand-blue text-white rounded-full font-medium btn-hover inline-block">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Programs;
