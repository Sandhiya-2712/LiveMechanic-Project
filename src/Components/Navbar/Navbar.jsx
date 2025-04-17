import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import './Navbar.css'; // CSS file for Navbar

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Pedal Partner</h1>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li> {/* Link to Home page */}
        <li><Link to="/services">Services</Link></li> 
        <li><Link to="/cng-vehicles">CNGVehicles</Link></li> 
        <li><Link to="/registration">Registration</Link></li>
        <li><Link to="/contact">Contact</Link></li>
         
      </ul>
     
    </div>
  );
};

export default Navbar;
