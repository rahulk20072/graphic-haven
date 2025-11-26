import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, ZoomIn, X, Code, Layers } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "Neon Horizon",
    category: "Branding",
    imageUrl: "https://picsum.photos/800/600?random=1",
    description: "A futuristic identity for a tech startup focusing on AI solutions.",
    client: "Nexus AI",
    year: "2023",
    technologies: ["Illustrator", "Cinema 4D", "Figma"],
    clientBrief: "Create a visual identity that bridges the gap between cyberpunk aesthetics and corporate reliability. The client wanted a look that felt 'alive' and constantly evolving.",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "EcoLife App",
    category: "Web Design",
    imageUrl: "https://picsum.photos/800/800?random=2",
    description: "UI/UX design for a sustainable living tracking application.",
    client: "GreenSpace",
    year: "2024",
    technologies: ["React Native", "Tailwind CSS", "Figma"],
    clientBrief: "Design an intuitive mobile interface for tracking carbon footprints that gamifies the experience for Gen Z users without feeling childish.",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Urban Sprawl",
    category: "Illustration",
    imageUrl: "https://picsum.photos/800/500?random=3",
    description: "Digital art series depicting the chaotic beauty of modern cities.",
    client: "Metropolis Mag",
    year: "2023",
    technologies: ["Procreate", "Photoshop", "Wacom"],
    clientBrief: "Illustrate the chaotic beauty of modern city living for the magazine's annual architecture issue, focusing on density and light.",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Vertex Magazine",
    category: "Print",
    imageUrl: "https://picsum.photos/800/1000?random=4",
    description: "Layout and typography for a monthly architectural digest.",
    client: "Vertex Publishing",
    year: "2022",
    technologies: ["InDesign", "Photoshop", "Typography"],
    clientBrief: "Redesign the monthly layout to reflect a more modernist, grid-heavy aesthetic inspired by Swiss design while maintaining readability.",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "Flow State",
    category: "Branding",
    imageUrl: "https://picsum.photos/800/600?random=5",
    description: "Rebranding for a high-performance athletic wear company.",
    client: "Pulse Athletics",
    year: "2023",
    technologies: ["Illustrator", "After Effects", "Blender"],
    clientBrief: "Develop a dynamic brand identity for high-performance athletic wear that conveys motion even when static.",
    liveUrl: "#"
  },
  {
    id: 6,
    title: "Culina",
    category: "Web Design",
    imageUrl: "https://picsum.photos/800/600?random=6",
    description: "E-commerce platform for artisanal kitchenware.",
    client: "Artisan Goods Co.",
    year: "2023",
    technologies: ["Next.js", "Stripe", "Framer Motion"],
    clientBrief: "Build a premium e-commerce experience that tells the story of the artisans behind each kitchenware product while ensuring a smooth checkout flow.",
    liveUrl: "#"
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Branding', 'Web Design', 'Illustration', 'Print'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Selected Works</h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-white text-dark-950' 
                  : 'bg-dark-800 text-gray-400 hover:bg-dark-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-xl bg-dark-800 cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-500 text-xs font-bold tracking-wider uppercase mb-2">{project.category}</span>
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
                <div className="mt-4 flex items-center text-brand-500 text-xs font-bold uppercase tracking-wider gap-1">
                    <ZoomIn size={14} /> <span>View Project</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedProject(null)}>
          <div className="bg-dark-900 rounded-2xl overflow-hidden max-w-6xl w-full max-h-[90vh] flex flex-col md:flex-row border border-white/10 shadow-2xl" onClick={e => e.stopPropagation()}>
            
            {/* Left: Image (Stays fixed or scales) */}
            <div className="md:w-1/2 bg-black relative flex items-center justify-center bg-dark-950">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover max-h-[40vh] md:max-h-full"
              />
              <div className="absolute top-4 left-4">
                 <span className="bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{selectedProject.category}</span>
              </div>
            </div>

            {/* Right: Scrollable Details */}
            <div className="md:w-1/2 flex flex-col bg-dark-900 border-l border-white/5">
                <div className="p-8 overflow-y-auto custom-scrollbar flex-grow">
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-white">{selectedProject.title}</h3>
                        <button 
                            onClick={() => setSelectedProject(null)}
                            className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {selectedProject.description}
                    </p>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-6 mb-8 p-4 bg-white/5 rounded-xl border border-white/5">
                        <div>
                            <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Client</span>
                            <span className="text-white font-medium">{selectedProject.client || 'Confidential'}</span>
                        </div>
                        <div>
                            <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Year</span>
                            <span className="text-white font-medium">{selectedProject.year || '2023'}</span>
                        </div>
                    </div>

                    {/* Brief */}
                    {selectedProject.clientBrief && (
                        <div className="mb-8">
                            <h4 className="flex items-center gap-2 text-brand-500 font-bold uppercase tracking-wider text-sm mb-3">
                                <Layers size={16} /> The Challenge
                            </h4>
                            <p className="text-gray-400 leading-relaxed">
                                {selectedProject.clientBrief}
                            </p>
                        </div>
                    )}

                    {/* Tech Stack */}
                    {selectedProject.technologies && (
                        <div className="mb-8">
                            <h4 className="flex items-center gap-2 text-brand-500 font-bold uppercase tracking-wider text-sm mb-3">
                                <Code size={16} /> Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.technologies.map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-dark-800 text-gray-300 text-xs rounded-full border border-white/10">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-white/10 bg-dark-950 flex gap-4">
                    <a 
                        href={selectedProject.liveUrl} 
                        className="flex-1 bg-white text-dark-950 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                        onClick={(e) => e.preventDefault()} // Prevent actual nav for demo
                    >
                        <ExternalLink size={18} /> View Live Project
                    </a>
                    <button 
                        className="px-6 py-3 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors"
                        onClick={() => setSelectedProject(null)}
                    >
                        Close
                    </button>
                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;