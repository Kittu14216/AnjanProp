import React from "react";
import { Link } from "react-router-dom";
import "./Services.css"; // Import the CSS for styling

// Import images
import planningImg from "../../assets/OurServices/planning.jpg";
import PreliminaryDesign from "../../assets/OurServices/programmingdesign.jpg";
import Finaldesignimg from "../../assets/OurServices/finaldesign.jpg";
import Advertiseimg from "../../assets/OurServices/advertise.jpg";
import Budgetingimg from "../../assets/OurServices/budgeting.jpg";
import Scheduleimg from "../../assets/OurServices/Scheduling.jpg";
import RiskAnalysisimg from "../../assets/OurServices/riskanalysis.jpg";
import ValueAnalysis from "../../assets/OurServices/valueanalysis.png";
import generalimg from "../../assets/OurServices/generalconstruct.gif";
import Gasimg from "../../assets/OurServices/gasAndpower.jpg";
import waterimg from "../../assets/OurServices/water.jpg";
import layoutimg from "../../assets/OurServices/layout.jpg";
// import constructionImg from "../../assets/construction.jpg";
// import infrastructureImg from "../../assets/infrastructure.jpg";

const servicesData = [
  {
    title: "Planning",
    description: "Project startup, scoping & budget, conceptual design.",
    image: planningImg,
    link: "/planning",
  },
  {
    title: "Programming & Preliminary Design",
    description:
      "Feasibility study, funding approval, primary design & approval.",
    image: PreliminaryDesign,
    link: "/programmingDesign",
  },
  {
    title: "Final Design",
    description: "Detailed design & approval, engineer's estimate, RFP.",
    image: Finaldesignimg,
    link: "/finalDesign",
  },
  {
    title: "Advertise & Award",
    description: "Advertise for bids, evaluate bids, award contracts.",
    image: Advertiseimg,
    link: "/advertiseAward",
  },
  {
    title: "Budgeting",
    description: "Overall cost estimation from start to finish.",
    image: Budgetingimg,
    link: "/budgeting",
  },
  {
    title: "Scheduling",
    description: "Provides activity breakdown and specific durations.",
    image: Scheduleimg,
    link: "/scheduling",
  },
  {
    title: "Constructability & Risk Analysis",
    description: "Determines risks and cost drivers for contingency planning.",
    image: RiskAnalysisimg,
    link: "/riskAnalysis",
  },
  {
    title: "Value Analysis",
    description: "Focuses on delivery and quality assurance.",
    image: ValueAnalysis,
    link: "/valueAnalysis",
  },

  {
    title: "General Construction",
    description: "New constructions, renovations, and restorations.",
    image: generalimg,
    link: "/generalConstruction",
  },
  {
    title: "Gas and Power Infrastructure",
    description: "Connections to building systems like plumbing and wiring.",
    image: Gasimg,
    link: "/gasPowerInfrastructure",
  },
  {
    title: "Water Infrastructure",
    description:
      "Transmission pipelines, water treatment systems, STP services.",
    image: waterimg,
    link: "/waterInfrastructure",
  },
  {
    title: "Layout Landscaping",
    description: "Layout development and landscaping services.",
    image: layoutimg,
    link: "/layoutLandscaping",
  },
];

const Services = () => {
  return (
    <div className="services-section" id="services">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-box">
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="service-button">
                Visit Here
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
