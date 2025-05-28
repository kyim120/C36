
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Features from './pages/Features';
import Templates from './pages/Templates';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App min-h-screen bg-gray-100 p-4">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/features" element={<Features />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
