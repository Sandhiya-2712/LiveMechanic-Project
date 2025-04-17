import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"; // Navbar component
import Home from "./Components/Home/Home"; // Home page
import Contact from "./Components/Contact/Contact"; // Contact page
import Services from "./Components/Services/Services"; // Services page
import CNGVehicles from "./Components/CNGVehicles/CNGVehicles";
import Registration from "./Components/Registration/Registration";

function App() {
  return (
    <Router>
      <Navbar /> {/* This stays constant across all pages */}
      
      {/* Define Routes for each page */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page */}
    
        <Route path="/services" element={<Services />} /> {/* Services page */}
        <Route path="/CNG-Vehicles" element={<CNGVehicles />} /> {/* Services page */}
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
