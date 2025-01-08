import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import './Navbar.css'; // CSS file for Navbar

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Pedal Partner</h1>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li> {/* Link to Home page */}
        <li><Link to="/vehicles">Vehicles</Link></li> {/* Link to Vehicles page */}
        <li><Link to="/services">Services</Link></li> {/* Link to Services page */}
        <li><Link to="/electric-vehicles">Electric Vehicles</Link></li> {/* Link to Electric Vehicles page */}
        <li><Link to="/contact">Contact</Link></li> {/* Link to Contact page */}
      </ul>
      <button>Sign in</button>
    </div>
  );
};

export default Navbar;
