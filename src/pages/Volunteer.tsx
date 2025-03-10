
import { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { useToast } from "@/components/ui/use-toast";

const VolunteerRole = ({ 
  title, 
  description, 
  commitment, 
  skills,
  color = "blue"
}: { 
  title: string; 
  description: string; 
  commitment: string;
  skills: string[];
  color?: "blue" | "green";
}) => (
  <div className={`bg-white rounded-xl p-6 shadow-sm border-l-4 ${
    color === "blue" ? "border-brand-blue" : "border-brand-green"
  }`}>
    <h3 className={`text-xl font-bold mb-3 ${
      color === "blue" ? "text-brand-blue" : "text-brand-green"
    }`}>{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className="mb-4">
      <span className="text-sm font-medium text-gray-600">Time Commitment:</span>
      <span className="text-sm ml-2 text-gray-700">{commitment}</span>
    </div>
    <div>
      <span className="text-sm font-medium text-gray-600">Skills:</span>
      <div className="flex flex-wrap gap-2 mt-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className={`text-xs px-3 py-1 rounded-full ${
              color === "blue" 
                ? "bg-brand-blue/10 text-brand-blue" 
                : "bg-brand-green/10 text-brand-green"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    experience: '',
    availability: '',
  });
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in volunteering. We'll be in touch soon.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      experience: '',
      availability: '',
    });
  };

  return (
    <MainLayout>
      <section className="relative hero-gradient min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 pattern-dots opacity-30"></div>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Volunteer With Us</h1>
          <div className="h-1 w-20 bg-white/50 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join our community of mentors, experts, and supporters making AI education accessible to all
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Why Volunteer?</h2>
            <p className="text-lg text-gray-700">
              By volunteering with OpenImpactLab, you'll help shape the next generation of AI innovators while 
              contributing to meaningful projects with real-world impact. Our volunteers gain valuable experience 
              mentoring diverse students, expand their professional networks, and make a tangible difference in 
              creating a more equitable tech future.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Current Volunteer Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <VolunteerRole 
              title="Project Mentor"
              description="Guide student teams through the technical and collaborative aspects of their AI projects."
              commitment="4-5 hours/week for 8-12 weeks"
              skills={["AI/ML Experience", "Project Management", "Mentoring", "Communication"]}
              color="blue"
            />
            <VolunteerRole 
              title="Industry Expert"
              description="Share your specialized knowledge through guest lectures, workshops, or technical advising."
              commitment="2-3 hours/month"
              skills={["Technical Expertise", "Public Speaking", "Knowledge Sharing"]}
              color="green"
            />
            <VolunteerRole 
              title="Career Coach"
              description="Help students prepare for careers in AI through resume reviews, mock interviews, and industry insights."
              commitment="2-4 hours/month"
              skills={["Hiring Experience", "Career Development", "Coaching"]}
              color="green"
            />
            <VolunteerRole 
              title="Curriculum Developer"
              description="Contribute to developing accessible, engaging learning materials on AI topics."
              commitment="5-10 hours/month"
              skills={["AI Knowledge", "Instructional Design", "Content Creation"]}
              color="blue"
            />
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-blue mb-6 text-center">Volunteer Application</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="interest">
                  Area of Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                >
                  <option value="">Select an option</option>
                  <option value="Project Mentor">Project Mentor</option>
                  <option value="Industry Expert">Industry Expert</option>
                  <option value="Career Coach">Career Coach</option>
                  <option value="Curriculum Developer">Curriculum Developer</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="experience">
                  Relevant Experience
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="availability">
                  Availability
                </label>
                <input
                  type="text"
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  placeholder="e.g., evenings, weekends, specific hours"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-brand-blue text-white rounded-full font-medium btn-hover"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Volunteer;
