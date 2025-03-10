
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const ResourceCard = ({ 
  title, 
  description, 
  link, 
  icon,
  color = "blue"
}: { 
  title: string; 
  description: string; 
  link: string;
  icon: string;
  color?: "blue" | "green";
}) => (
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
      color === "blue" ? "bg-brand-blue/10" : "bg-brand-green/10"
    }`}>
      <span className={`text-2xl ${
        color === "blue" ? "text-brand-blue" : "text-brand-green"
      }`}>
        {icon}
      </span>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`inline-flex items-center text-sm font-medium ${
        color === "blue" ? "text-brand-blue" : "text-brand-green"
      } hover:underline`}
    >
      Access Resource
      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
);

const FaqItem = ({ 
  question, 
  answer 
}: { 
  question: string; 
  answer: string;
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <section className="relative hero-gradient min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 pattern-dots opacity-30"></div>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Resources</h1>
          <div className="h-1 w-20 bg-white/50 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Educational materials, guides, and tools to support your AI learning journey
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl mb-20">
          <h2 className="text-3xl font-bold text-center text-brand-blue mb-12">Learning Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ResourceCard 
              title="AI Fundamentals Guide"
              description="A comprehensive introduction to AI concepts, perfect for beginners starting their journey."
              link="#"
              icon="📚"
              color="blue"
            />
            <ResourceCard 
              title="Project Planning Toolkit"
              description="Templates and frameworks to help structure your AI project development process."
              link="#"
              icon="🛠️"
              color="green"
            />
            <ResourceCard 
              title="Ethics in AI Framework"
              description="Guidelines for ensuring your AI projects consider important ethical implications."
              link="#"
              icon="⚖️"
              color="blue"
            />
            <ResourceCard 
              title="Data Collection Best Practices"
              description="Learn how to gather and prepare high-quality data for your AI projects."
              link="#"
              icon="📊"
              color="green"
            />
            <ResourceCard 
              title="AI Career Pathways"
              description="Explore various career options in the AI field and how to prepare for them."
              link="#"
              icon="🚀"
              color="blue"
            />
            <ResourceCard 
              title="Community Engagement Guide"
              description="Strategies for involving communities in the development of AI solutions."
              link="#"
              icon="🤝"
              color="green"
            />
          </div>
        </div>

        <div className="container mx-auto max-w-4xl mb-20">
          <h2 className="text-3xl font-bold text-center text-brand-blue mb-12">Recommended Tools</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">For Beginners</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <div>
                    <span className="font-medium">Google's Teachable Machine</span>
                    <p className="text-sm text-gray-600">Create machine learning models without coding</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <div>
                    <span className="font-medium">MIT App Inventor</span>
                    <p className="text-sm text-gray-600">Build mobile apps with AI components using blocks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <div>
                    <span className="font-medium">Kaggle Learn</span>
                    <p className="text-sm text-gray-600">Free courses on data science and machine learning</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">For Advanced Learners</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-brand-green mr-2">•</span>
                  <div>
                    <span className="font-medium">TensorFlow & PyTorch</span>
                    <p className="text-sm text-gray-600">Industry-standard frameworks for building AI models</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green mr-2">•</span>
                  <div>
                    <span className="font-medium">Hugging Face</span>
                    <p className="text-sm text-gray-600">Access pre-trained models and datasets</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green mr-2">•</span>
                  <div>
                    <span className="font-medium">GitHub Copilot</span>
                    <p className="text-sm text-gray-600">AI pair programming to accelerate development</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-3xl">
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-brand-blue mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <FaqItem 
                question="What prior knowledge do I need for OpenImpactLab programs?"
                answer="Our programs are designed for various skill levels. While some basic understanding of programming concepts is helpful, many of our beginner programs require no prior experience. Each program listing specifies any prerequisites."
              />
              <FaqItem 
                question="How much time should I commit to a project?"
                answer="Most projects require 5-10 hours per week over an 8-12 week period. We offer flexible scheduling options and clearly communicate time expectations before you commit to a program."
              />
              <FaqItem 
                question="Can organizations propose projects?"
                answer="Yes! We actively seek partner organizations with meaningful challenges that can benefit from AI solutions. Please contact us through our partnerships page to discuss potential collaborations."
              />
              <FaqItem 
                question="Are OpenImpactLab programs free for students?"
                answer="Thanks to our generous supporters and partners, most of our programs are offered at no cost to qualified students. Some specialized programs may have nominal fees, with scholarships available."
              />
              <FaqItem 
                question="How can I support OpenImpactLab's mission?"
                answer="You can contribute by volunteering as a mentor, providing financial support through donations, partnering with us as an organization, or spreading awareness about our programs."
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Resources;
