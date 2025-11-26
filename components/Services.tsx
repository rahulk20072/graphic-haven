import React from 'react';
import { PenTool, Monitor, Layout, Box } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: "Brand Identity",
    description: "Complete visual identity systems including logo design, typography, color palettes, and brand guidelines.",
    icon: "pen",
    priceStart: "$2,500+"
  },
  {
    id: 2,
    title: "Web Design",
    description: "Responsive, accessible, and high-converting website designs tailored to your specific audience.",
    icon: "monitor",
    priceStart: "$3,000+"
  },
  {
    id: 3,
    title: "Print Design",
    description: "Tangible marketing materials from business cards and brochures to large-format posters and packaging.",
    icon: "layout",
    priceStart: "$500+"
  },
  {
    id: 4,
    title: "3D Visuals",
    description: "Stunning 3D renders and motion graphics to add depth and modern flair to your project.",
    icon: "box",
    priceStart: "$1,500+"
  }
];

const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'pen': return <PenTool className="h-8 w-8 text-brand-500" />;
      case 'monitor': return <Monitor className="h-8 w-8 text-brand-500" />;
      case 'layout': return <Layout className="h-8 w-8 text-brand-500" />;
      case 'box': return <Box className="h-8 w-8 text-brand-500" />;
      default: return <PenTool className="h-8 w-8 text-brand-500" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-500 font-bold uppercase tracking-widest text-sm">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Crafting Digital <br /> Experiences That Matter
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We don't just make things look pretty. We combine strategic thinking with world-class design execution to solve business problems. Whether you're a startup looking for an identity or an enterprise needing a UI overhaul, we have the tools.
            </p>
            <a href="#contact" className="text-white border-b-2 border-brand-500 pb-1 hover:text-brand-500 transition-colors font-semibold inline-flex items-center gap-2 group">
              Get a Quote <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.id} className="glass p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-brand-500/30 group">
                <div className="bg-dark-950 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="text-xs font-semibold text-brand-500 bg-brand-500/10 px-3 py-1 rounded-full">Starts at {service.priceStart}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;