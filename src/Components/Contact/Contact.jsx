import React, { useRef } from "react";
import emailjs from "emailjs-com";
import './Contact.css'; // Custom CSS for styling
import Contactimage1 from '../../assets/Contactimage1.png';
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.init('hideUdBrPJ_6pk2wo'); // Initialize EmailJS (replace YOUR_PUBLIC_KEY with your public key)

    emailjs
      .sendForm(
        'service_3jxub3h',  // Replace with your EmailJS Service ID
        'template_6gobk89', // Replace with your EmailJS Template ID
        form.current
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send the message. Please try again.");
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <>
    <div className="contact-container">
      <div className="heading1">
        
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label className="label1">Name:</label>
        <input type="text" name="user_name" required />

        <label className="label2">Email:</label>
        <input type="email" name="user_email" required />

        <label className="label3">Message:</label>
        <textarea name="message" required />

        <button type="submit">Send</button>
      </form>
      </div>
      <div className="heading2">Contect</div>
        <div className="heading3">From</div>
        <div className="heading4">Anywhere</div>
        <div className="heading5">Anytime & anyplace </div>
        <div className="heading6">best services in our city </div>
        <div className="heading7">Email: PedalPartner@gmail.com</div>
        <div className="heading8">Phone: 8765456432</div>
    </div>
   <img className="Contactimage1" src={Contactimage1} alt="" />
    
    <div className="con-content1">The Live Mechanic Location Finder is a feature that helps users find nearby mechanics in real time based on their selected location. When a user clicks the "Find Mechanic" button, the system retrieves registered mechanics' details from the backend and displays them on a map. The feature integrates with the Google Maps API to show mechanics' locations visually. Users can enter a location or select from predefined areas to filter mechanics accordingly. The backend stores mechanic details, including name, contact, and service location.</div>
    
    <div className="con-icon1"><MdLocationPin size={30} color="red"/></div>
    <div className="con-icon2"><MdLocationPin size={30} color="red"/></div>
    <div className="con-icon3"><MdLocationPin size={30} color="red"/></div>
    <div className="con-icon4"><MdLocationPin size={30} color="red"/></div>
    
    <div className="con-content2">Location Finder</div>
    
    <div className="con-content3">Live MechanicDisplay</div>
    
    <div className="con-content4">Location Filtering</div>
    <div className="con-content5">Contect Any Time</div>


    
    </>
  );
};

export default Contact;
