import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"; // Navbar component
import Home from "./Components/Home/Home"; // Home page
import Contact from "./Components/Contact/Contact"; // Contact page
import Vehicles from "./Components/Vehicles/Vehicles"; // Vehicles page
import Services from "./Components/Services/Services"; // Services page
import ElectricVehicles from "./Components/ElectricVehicles/ElectricVehicles"; // Electric Vehicles page

function App() {
  return (
    <Router>
      <Navbar /> {/* This stays constant across all pages */}
      
      {/* Define Routes for each page */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        <Route path="/vehicles" element={<Vehicles />} /> {/* Vehicles page */}
        <Route path="/services" element={<Services />} /> {/* Services page */}
        <Route path="/electric-vehicles" element={<ElectricVehicles />} /> {/* Electric Vehicles page */}
      </Routes>
    </Router>
  );
}

export default App;
