import React from "react";
import "./Contact.css"; // Import the external CSS for styling

const ContactUs = () => {
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
            style={{ border: 0 }} // Corrected style as an object
            allowFullScreen="" // Corrected to allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" // Corrected referrerPolicy
          ></iframe>
        </div>

        {/* Column 2: Feedback Form */}
        <div className="form-column">
          <h2 className="contact-heading">We'd Love to Hear From You!</h2>
          <form className="feedback-form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
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
