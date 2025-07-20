// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//   return (
//     <header className="header">
//       <Link to="/" className="logo">HappyPaws - PET STORE</Link>
//       <nav className="navbar">
//         <Link className="nav-links" to="/">HOME</Link>
//         <Link className="nav-links" to="/pets">PETS</Link>
//         <Link className="nav-links" to="/services">SERVICES</Link>
//         <Link className="nav-links" to="/about">ABOUT</Link>
//         <Link className="nav-links" to="/contact">CONTACT</Link>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <Link to="/" className="logo">HappyPaws - PET STORE</Link>

      <div
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <Link className="nav-links" to="/" onClick={toggleMenu}>HOME</Link>
        <Link className="nav-links" to="/pets" onClick={toggleMenu}>PETS</Link>
        <Link className="nav-links" to="/services" onClick={toggleMenu}>SERVICES</Link>
        <Link className="nav-links" to="/about" onClick={toggleMenu}>ABOUT</Link>
        <Link className="nav-links" to="/contact" onClick={toggleMenu}>CONTACT</Link>
      </nav>
    </header>
  );
}

export default Navbar;
