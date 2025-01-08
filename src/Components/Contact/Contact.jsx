import React, { useRef } from "react";
import emailjs from "emailjs-com";
import './Contact.css'; // Custom CSS for styling

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
    </div>
  );
};

export default Contact;
