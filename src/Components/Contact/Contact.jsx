import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import emailjs from "emailjs-com";
import "./Contact.css"; // Import the external CSS for styling

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save feedback to Firestore
      await addDoc(collection(db, "feedback"), {
        name,
        email,
        message,
      });

      // EmailJS template parameters for the admin
      const adminTemplateParams = {
        from_name: name,
        to_name: name, // Adjust as needed
        message: `Dear ${name},\n\nThank you for your message:\n"${message}"\n\nWe appreciate your input!\n\nWe will get back to you soon if necessary.\n\nThank you for helping us improve our services.\n\nBest regards,\nAnjan Citicon Pvt Ltd,\n anjan.citicon.pvt@gmail.com.`, // Personalized message for the admin

        from_email: email,
      };

      // EmailJS template parameters for the user
      const userTemplateParams = {
        from_name: "Anjan Citicon Private Limited", // Replace with your company name
        to_name: name,
        message: `New message from ${name}:\n\n${message}\n\n${name},\n${email}`,
        from_email: "anjan.citicon.pvt@gmail.com", // Replace with your verified sender email address
        to_email: email, // User's email (dynamically set)
      };

      // Send email to the user
      await emailjs.send(
        "service_sxaxxgz", // Replace with your EmailJS service ID
        "template_nxvo8ux", // Replace with your EmailJS user template ID
        adminTemplateParams,
        "ZjSIYO_eVdaf_NLVr" // Replace with your EmailJS user ID (public key)
      );

      // Send email to the admin
      await emailjs.send(
        "service_sxaxxgz", // Replace with your EmailJS service ID
        "template_fj3v1dl", // Replace with your EmailJS admin template ID
        userTemplateParams,
        "ZjSIYO_eVdaf_NLVr" // Replace with your EmailJS user ID (public key)
      );

      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error submitting feedback: ", error);
      alert("Failed to submit feedback. Please try again.");
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-us-section" id="contact">
      <h2 className="contact-heading">Contact-Us</h2>
      <div className="contact-us-container">
        {/* Column 1: Map */}
        <div className="map-column">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7774.302456718981!2d77.68435103224448!3d13.026039999177003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAnjan%20Blossom%2C%20TC%20Palya%2C%20Bangalore%20-%2036!5e0!3m2!1sen!2sin!4v1729573742357!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Column 2: Feedback Form */}
        <div className="form-column">
          <h2 className="contact-heading">We'd Love to Hear From You!</h2>
          <form className="feedback-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              required
            ></textarea>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
