import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Investors from './components/Investors';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Investors />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
