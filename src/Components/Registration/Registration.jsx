import React, { useState } from "react";
import axios from "axios";
import "./Registration.css";
import registerimage1 from '../../assets/registerimage1.png';
import registerimage2 from '../../assets/registerimage2.png';
import { HiCheckBadge } from "react-icons/hi2";
import registerimage3 from '../../assets/registerimage3.png';
import registerimage4 from '../../assets/registerimage4.png';
import registerimage5 from '../../assets/registerimage5.png';






const Registration = () => {
  const [mechanic, setMechanic] = useState({ name: "", phone: "", place: "" });

  const handleRegisterChange = (e) => {
    setMechanic({ ...mechanic, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5002/register-mechanic", mechanic);
      window.alert("Mechanic registered successfully!"); 
      setMechanic({ name: "", phone: "", place: "" });
    } catch (error) {
      window.alert("Error registering mechanic. Please try again."); 
    }
  };

  return (
    <>
    <div className="register-container">
      <h2>Mechanic Registration</h2>
      <form onSubmit={handleRegisterSubmit}>
        <input
          type="text"
          name="name"
          value={mechanic.name}
          onChange={handleRegisterChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="phone"
          value={mechanic.phone}
          onChange={handleRegisterChange}
          placeholder="Phone"
          required
        />
        <input
          type="text"
          name="place"
          value={mechanic.place}
          onChange={handleRegisterChange}
          placeholder="Place"
          required
        />
        <button type="submit">Register</button>
      </form>

      <div className="mec-con1">Happy to </div>
      <div className="mec-con2">Help!</div>
      <div className="mec-con3">
        Reach out to us via email, phone, or by filling out the form to see how ReadyAssist can help you!
      </div>
      <div className="mec-con4">Email</div>
      <div className="mec-con5">pedalpartner@gmail.com</div>
    </div>
       <img  className ="regimg1" src={registerimage1} alt="" />
       <img  className ="regimg2" src={registerimage2} alt="" />
       <div className="mec-con6">Why People choose Our Services?</div>
       <div className="mec-con7">ReadyAssist provides **24/7 roadside assistance** and **on-demand vehicle care services** with our **Live Mechanic** feature. Whether you're facing a sudden breakdown, need urgent repairs, or want to enhance your vehicle’s performance, our expert mechanics are just a click away. Get seamless, reliable, and professional service **right at your location**, ensuring a hassle-free experience whenever you need it.</div>
    
  <div className="reg-icon1"><HiCheckBadge size={20} color="yellow"/></div>
  <div className="reg-icon2"><HiCheckBadge size={20} color="yellow"/></div>
  <div className="reg-icon3"><HiCheckBadge size={20} color="yellow"/></div>
  <div className="reg-icon4"><HiCheckBadge size={20} color="yellow"/></div>
  <div className="reg-icon5"><HiCheckBadge size={20} color="yellow"/></div>

    <div className="reg-con1">On-Demand Experts</div>
    <div className="reg-con2">Instant Repairs</div>
    <div className="reg-con3">Personalized Solutions</div>
    <div className="reg-con4">Rapid Assistance</div>
    <div className="reg-con5">Trusted Service</div>

     <div className="register-con1">Unlock Benefits with</div>
     <div className="register-con2">Live Mechanic Assistance</div>

     <div className="register-con3">Pan India 24/7 Live Mechanic Assistance</div>
     <div className="register-con4">**24/7 Live Mechanic Assistance across India** – Get instant roadside repairs without towing. Our expert mechanics reach you anytime, anywhere for a hassle-free experience.</div>
    <div className="register-con5">Nationwide 24/7 Live Mechanic Support</div>
    <div className="register-con6">Wherever you are, our Live Mechanic service ensures on-the-spot repairs anytime. Get expert assistance across India, keeping your journey smooth and worry-free.</div>
    <img className="regimg3" src={registerimage3} alt="" />
    
    <img className="regimg4" src={registerimage4} alt="" />
    <img className="regimg5" src={registerimage5} alt="" />
    
    <div className="register-con7">Instant On-Spot Mechanic Service</div>
    <div className="register-con8">Get your vehicle repaired instantly at your location—no need to visit a workshop! With our Live Mechanic feature, expert technicians provide quick, reliable, and affordable repairs for all types of vehicles, ensuring a smooth and hassle-free experience wherever you are. Our mechanics are equipped with advanced tools to handle breakdowns efficiently, keeping you on the road with minimal downtime. Available 24/7, just a call away! From engine diagnostics to tire replacements, we offer a wide range of repair services tailored to your needs. 







</div>
</>
  );
};

export default Registration;
