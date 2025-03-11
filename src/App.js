import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
