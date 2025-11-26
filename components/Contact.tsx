import React, { useState } from 'react';
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setStatus('success');
        setTimeout(() => setStatus('idle'), 3000);
    }

  return (
    <section id="contact" className="relative pt-24 pb-12 bg-black overflow-hidden">
        {/* Decorative bg */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-900/20 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Let's Create Something Iconic</h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              Ready to elevate your brand? Drop us a line. We are currently accepting new projects for Q4 2024.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-dark-800 p-3 rounded-lg border border-white/10">
                  <Mail className="h-6 w-6 text-brand-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400">hello@graphichaven.studio</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-dark-800 p-3 rounded-lg border border-white/10">
                  <Phone className="h-6 w-6 text-brand-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-dark-800 p-3 rounded-lg border border-white/10">
                  <MapPin className="h-6 w-6 text-brand-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Studio</h4>
                  <p className="text-gray-400">100 Design District, New York, NY</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-dark-800 rounded-full hover:bg-brand-500 hover:text-white text-gray-400 transition-all"><Instagram size={20}/></a>
                <a href="#" className="p-2 bg-dark-800 rounded-full hover:bg-brand-500 hover:text-white text-gray-400 transition-all"><Twitter size={20}/></a>
                <a href="#" className="p-2 bg-dark-800 rounded-full hover:bg-brand-500 hover:text-white text-gray-400 transition-all"><Linkedin size={20}/></a>
                <a href="#" className="p-2 bg-dark-800 rounded-full hover:bg-brand-500 hover:text-white text-gray-400 transition-all"><Github size={20}/></a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-dark-900 p-8 rounded-2xl border border-white/5 shadow-xl">
             {status === 'success' ? (
                 <div className="h-full flex flex-col items-center justify-center text-center py-20">
                     <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                         <Mail className="w-8 h-8"/>
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                     <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                 </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input type="text" className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500" placeholder="John Doe" required />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input type="email" className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500" placeholder="john@example.com" required />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                    <select className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500">
                    <option>Project Inquiry</option>
                    <option>Collaboration</option>
                    <option>General Question</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500" placeholder="Tell us about your project..." required></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 rounded-lg transition-colors">
                    Send Message
                </button>
                </form>
             )}
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Graphic Haven. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;