import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import DesignMuse from './components/DesignMuse';
import About from './components/About';

function App() {
  return (
    <div className="bg-dark-950 min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Contact />
      </main>
      <DesignMuse />
    </div>
  );
}

export default App;