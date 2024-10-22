import React from "react";
import "./Footer.css"; // Import external CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Address and Contact Details */}
        <div className="footer-column">
          <h2 className="footer-heading">Address</h2>
          <p>
            <span className="material-icons">location_on</span>
            #Anjan Blossom, <br />
            TC Palya, <br />
            Bangalore - 36
          </p>
          <p>
            <span className="material-icons">phone</span>
            Contact Number: +91-9663885875 <br />
            <span className="material-icons">email</span>
            Email:{" "}
            <a href="mailto:anjanciticon2012@gmail.com">
              anjanciticon2012@gmail.com
            </a>
          </p>
        </div>

        {/* Column 2: Services */}
        <div className="footer-column">
          <h2 className="footer-heading">Our Services</h2>
          <div className="footer-services-container">
            <div className="footer-services-column">
              <h3>Pre-Construction Services:</h3>
              <ul>
                <li>Planning</li>
                <li>Programming & Preliminary Design</li>
                <li>Final Design</li>
                <li>Advertise & Award</li>
                <li>Budgeting</li>
                <li>Scheduling</li>
                <li>Constructability & Risk Analysis</li>
                <li>Value Analysis</li>
                <li>Logistic Planning</li>
              </ul>
            </div>

            <div className="footer-services-column">
              <h3>Construction & Infrastructure Services:</h3>
              <ul>
                <li>General Construction</li>
                <li>Gas and Power Infrastructure Services</li>
                <li>Water Infrastructure Services</li>
                <li>Layout Landscaping Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
