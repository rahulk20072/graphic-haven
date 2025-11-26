import React from 'react';
import { Award, Users, Coffee, Zap, Linkedin, Twitter, Download } from 'lucide-react';

const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder & Art Director',
    image: 'https://picsum.photos/400/400?random=10',
    bio: 'Visionary leader with over 15 years of experience in digital branding. Alex believes in design that dares to disturb the comfortable.'
  },
  {
    name: 'Sarah Chen',
    role: 'Lead UI/UX Designer',
    image: 'https://picsum.photos/400/400?random=11',
    bio: 'Obsessed with user journeys and pixel-perfect interfaces. Sarah transforms complex data into intuitive experiences.'
  },
  {
    name: 'Marcus Johnson',
    role: 'Brand Strategist',
    image: 'https://picsum.photos/400/400?random=12',
    bio: 'Turns abstract concepts into concrete, market-leading strategies. Marcus ensures every pixel serves a business purpose.'
  }
];

const stats = [
  { icon: Award, label: 'Awards Won', value: '24' },
  { icon: Users, label: 'Happy Clients', value: '150+' },
  { icon: Coffee, label: 'Coffees Brewed', value: '8k+' },
  { icon: Zap, label: 'Projects Shipped', value: '300+' }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-950 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-brand-500/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro / Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <div className="relative group">
                 <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500"></div>
                 <img 
                    src="https://picsum.photos/600/800?random=20" 
                    alt="Our Studio" 
                    className="relative rounded-2xl shadow-2xl w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                 />
            </div>
            
            <div>
                <span className="text-brand-500 font-bold uppercase tracking-widest text-sm">Who We Are</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Beyond Pixels & Vectors</h2>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                    <p>
                        Founded in 2020, Graphic Haven emerged from a simple desire: to bridge the gap between functional design and digital art. We believe that every brand has a soul, and our job is to visualize it.
                    </p>
                    <p>
                        We are not just designers; we are visual alchemists. Our philosophy is rooted in <strong>Brutal Minimalism</strong>—stripping away the unnecessary to reveal the core truth of a brand, then presenting it with bold, unapologetic aesthetics.
                    </p>
                    <p>
                        Whether working with Fortune 500s or garage startups, our approach remains the same: Relentless curiosity and uncompromising quality.
                    </p>
                </div>
                
                <div className="mt-8">
                  <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-all font-medium group">
                    <Download className="w-5 h-5 group-hover:text-brand-500 transition-colors" />
                    Download Studio Profile
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/10">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center sm:text-left">
                            <stat.icon className="w-6 h-6 text-brand-500 mb-2 mx-auto sm:mx-0" />
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Team Grid */}
        <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-4">The Collective</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">Meet the minds behind the magic.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
                <div key={index} className="group relative bg-dark-900 rounded-xl overflow-hidden border border-white/5 hover:border-brand-500/50 transition-all duration-300">
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden h-64 md:h-80">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        {/* Social Overlay */}
                        <div className="absolute inset-0 bg-brand-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                            <a href="#" className="p-2 bg-white text-dark-900 rounded-full hover:bg-brand-500 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white text-dark-900 rounded-full hover:bg-brand-500 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <div className="p-6 relative">
                        <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                        <span className="text-brand-500 text-sm font-medium uppercase tracking-wider block mb-3">{member.role}</span>
                        <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default About;