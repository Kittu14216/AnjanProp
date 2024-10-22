import React from "react";
import "./Header1.css";

export default function Header() {
  return (
    <div className="header" id="home">
      <div className="header-content">
        <h1 className="main-heading">Anjan Citicon Pvt.Ltd.</h1>{" "}
        {/* Main Heading */}
        <h2 className="sub-heading">
          Leading the Construction Industry Globally
        </h2>{" "}
        {/* Subheading */}
        <p className="small-paragraph">
          Attaining excellence in quality and delivering value-added projects on
          time to become the preferred choice of customers.
        </p>{" "}
        {/* Small Paragraph */}
      </div>
    </div>
  );
}
