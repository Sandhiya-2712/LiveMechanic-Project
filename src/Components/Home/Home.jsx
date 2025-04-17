import React, { useState } from "react";
import "./Home.css"; 
import electricimage from '../../assets/electricimage.png';
import { TiTick } from "react-icons/ti";
import mechanic1 from '../../assets/mechanic1.png';
import mechanic2 from '../../assets/mechanic2.png';

const Home = () => {
  const [place, setPlace] = useState("");
  const [mechanics, setMechanics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const fetchMechanics = async () => {
    if (!place.trim()) {
      alert("Please enter a location to search.");
      return;
    }
    
    setLoading(true);
    setSearched(true);

    try {
      const response = await fetch(`http://localhost:5002/mechanics?place=${place}`);
      const data = await response.json();
      setMechanics(data);
    } catch (error) {
      console.error("Error fetching mechanics:", error);
    }

    setLoading(false);
  };

  
  const clearSearch = () => {
    setPlace("");
    setMechanics([]);
    setSearched(false);
  };

  return (
    <div className="home-container">
      <h1 className="animated-title">24/7 live mechanic assistance anytime, anywhere</h1>
           <div className="title-content1"> live mechanic assistance whenever you need it. Quickly locate and connect with nearby mechanics for instant vehicle repairs. Stay stress-free on the road with reliable emergency support anytime, anywhere.</div>
      {/* Mechanic Search Section */}
      
      
      
      <div className="search-section">
        <h2>Find a Mechanic</h2>
        <input
          type="text"
          placeholder="Enter Location"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          className="search-input"
        />
        <button onClick={fetchMechanics} className="search-btn">
          Search Mechanic
        </button>
        <button onClick={clearSearch} className="clear-btn">
          Clear
        </button>
      </div>

      {/* Display Mechanics in Grid Format */}
      {loading ? (
        <div className="loading">🔍 Searching...</div>
      ) : (
        <div className="mechanic-grid">
          {searched && mechanics.length === 0 ? (
            <p className="no-mechanic">No mechanics found for this location.</p>
          ) : (
            mechanics.map((mechanic, index) => (
              <div key={index} className="mechanic-card">
                <h3>{mechanic.name}</h3>
                <p><strong>Phone:</strong> {mechanic.phone}</p>
                <p><strong>Location:</strong> {mechanic.place}</p>
              </div>
            ))
          )}
        </div>
      )}
<img className='electricimage' src={electricimage} alt="" />
<div className="electrical-content1">Electric vehicles (EVs) run on electricity instead of gasoline, reducing carbon emissions and promoting sustainability. They come in different types, such as Battery Electric Vehicles (BEVs), Plug-in Hybrid Electric Vehicles (PHEVs), and Hybrid Electric Vehicles (HEVs). EVs use lithium-ion batteries, which provide efficient energy storage and longer life. Charging options include home charging, public charging stations, and fast chargers for quick refueling. Governments worldwide offer incentives like subsidies and tax benefits to encourage EV adoption and reduce reliance on fossil fuels.</div>

 <div className="heading-content1">Live Mechanic Assistance</div>
 <div className="heading-content2">The Live Mechanic feature helps vehicle owners find nearby mechanics in real time during breakdowns. By integrating GPS and Google Maps API, users can search for mechanics based on their location and get instant assistance. Registered mechanics' details, including names and locations, are displayed when users click the Find Mechanic button. This feature ensures quick and efficient roadside support, reducing wait times and inconvenience. Mechanics can register on the platform, making it easy for users to access verified professionals. The system enhances reliability by showing only mechanics available in the selected area. Overall, it improves the on-road assistance experience for drivers in emergencies.</div>


<div className="Footer-content">
    <div className="Footer-content1">Live Mechanic</div>
    <div className="Footer-content2">Inspection Services</div>
    <div className="home-icon1"><TiTick  size={40} color="yellow"/></div>
    <div className="home-icon2"><TiTick  size={40} color="yellow"/></div>
    <div className="home-icon3"><TiTick  size={40} color="yellow"/></div>
    <div className="icon-content1">On-spoat Vehicles Inspection</div>
    <div className="icon-content2">Comprehensive 78-point Health check</div>
    <div className="icon-content3">Instant Fault Detection & Repair Advice</div>
    <img className="Mech-image1" src={mechanic1} alt="" />
</div>

   <img className="Mech-image2" src={mechanic2} alt="" />
   <div className="Mech-content1">Mechanics play a crucial role in maintaining and repairing vehicles, ensuring they run smoothly and safely. They diagnose mechanical issues, perform routine maintenance, and fix problems related to engines, brakes, transmissions, and other essential components. Skilled in using specialized tools and diagnostic equipment, mechanics work on various vehicle types, including cars, trucks, and motorcycles. With the rise of electric and hybrid vehicles, modern mechanics also need expertise in advanced automotive technology. Many mechanics specialize in specific areas like engine repair, air conditioning systems, or vehicle electronics.</div>

    </div>
  );
};

export default Home;
