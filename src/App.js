import React from 'react';
import './App.css';
// import { Routes, Route, Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pets from './components/Pets';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import heroImage from '../images/all.jpg';


function App() {
  return (
    // <Router>

    <div className="App">
      <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div >
    // </Router>
  );
}

export default App;
