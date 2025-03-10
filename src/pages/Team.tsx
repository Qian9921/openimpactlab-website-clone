
import { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';

const TeamMember = ({ 
  name, 
  title, 
  image, 
  bio 
}: { 
  name: string; 
  title: string; 
  image: string;
  bio: string;
}) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
    <div className="h-64 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-brand-blue mb-4">{title}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  </div>
);

const AdvisoryBoard = ({ 
  name, 
  title, 
  organization 
}: { 
  name: string; 
  title: string; 
  organization: string;
}) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <h3 className="font-bold text-gray-800">{name}</h3>
    <p className="text-sm text-gray-600">{title}</p>
    <p className="text-xs text-brand-blue">{organization}</p>
  </div>
);

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <section className="relative hero-gradient min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 pattern-dots opacity-30"></div>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Team</h1>
          <div className="h-1 w-20 bg-white/50 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Meet the passionate individuals driving OpenImpactLab's mission forward
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <TeamMember 
              name="Dr. Elena Rodriguez"
              title="Executive Director"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1988&q=80"
              bio="Former AI Research Lead with 15+ years experience in AI education and a passion for creating equitable access to technology skills."
            />
            <TeamMember 
              name="Marcus Chen"
              title="Director of Programs"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              bio="Social entrepreneur with extensive experience designing educational programs that bridge academic learning with real-world applications."
            />
            <TeamMember 
              name="Aisha Washington"
              title="Partnerships Director"
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              bio="Former nonprofit executive who excels at building strategic partnerships between educational institutions, nonprofits, and the tech industry."
            />
          </div>

          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Program Team</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            <TeamMember 
              name="David Park"
              title="AI Curriculum Lead"
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              bio="AI researcher and educator developing accessible learning experiences that make cutting-edge AI concepts approachable."
            />
            <TeamMember 
              name="Sophia Rivera"
              title="Student Success Manager"
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1998&q=80"
              bio="Former academic advisor dedicated to supporting students from diverse backgrounds throughout their learning journey."
            />
            <TeamMember 
              name="James Wilson"
              title="Projects Coordinator"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              bio="Project management specialist who ensures our real-world projects run smoothly and meet both educational and partner goals."
            />
            <TeamMember 
              name="Leila Patel"
              title="Community Engagement"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              bio="Community builder focused on creating an inclusive environment for students, mentors, and partners in our ecosystem."
            />
          </div>

          <h2 className="text-2xl font-bold text-brand-blue mb-8 text-center">Advisory Board</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <AdvisoryBoard 
              name="Dr. Michael Thompson"
              title="Chief AI Officer"
              organization="TechForward Inc."
            />
            <AdvisoryBoard 
              name="Prof. Amara Nelson"
              title="Chair, Computer Science"
              organization="Pacific University"
            />
            <AdvisoryBoard 
              name="Rajiv Mehta"
              title="Founder & CEO"
              organization="EduTech Ventures"
            />
            <AdvisoryBoard 
              name="Dr. Lisa Johnson"
              title="Director of Research"
              organization="Center for AI Ethics"
            />
            <AdvisoryBoard 
              name="Thomas Greene"
              title="Executive Director"
              organization="Community Tech Alliance"
            />
            <AdvisoryBoard 
              name="Dr. Sarah Williams"
              title="Education Innovation Lead"
              organization="Global Learning Initiative"
            />
            <AdvisoryBoard 
              name="Kevin Zhang"
              title="VP of Engineering"
              organization="Future Systems"
            />
            <AdvisoryBoard 
              name="Maria Gonzalez"
              title="Director of DEI"
              organization="Tech Equity Coalition"
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Team;
