import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact'; // Import the new component

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />

      {/* Tiny Copyright Bar */}
      <div className="bg-blue-950 text-blue-300 py-6 text-center text-sm">
        <p>© 2025 Brighter Coaching Institute. Designed with ❤️ in Pune.</p>
      </div>
    </div>
  );
}

export default App;