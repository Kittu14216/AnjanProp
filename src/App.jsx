import "./App.css";
import Header1 from "./Components/Header1/Header1";
import NavContainer from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
// import Services1 from "./Components/Services1/Services1";
import Projects from "./Components/Projects/Projects";
import Ongoing from "./Components/OngoingProjects/Ongoing";

import Spacer from "./Components/Spacer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Visakhapatnam from "./Components/ProjectDetails/Amalapuaram";
// import Delhi from "./Components/ProjectDetails/Delhi";
// import Amalapuram from "./Components/ProjectDetails/Visakhapatnam";
// import Kakinada from "./Components/ProjectDetails/kakinada";
// import Warangal from "./Components/ProjectDetails/Warangal";
// import Hyderabad from "./Components/ProjectDetails/Hyderabad";
import AboutUs from "./Components/AboutUs/About";
import Milestones from "./Components/Milestones/Milestone";
import VisionMission from "./Components/VisionMision/VisionMision";
import ContactUs from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import Planning from "./Components/ServicePages/Planning";
import ProgramDesign from "./Components/ServicePages/PragramDesign";
import Finaldesign from "./Components/ServicePages/Finaldesign";
import Advertise from "./Components/ServicePages/Advertise";
import Budgeting from "./Components/ServicePages/Budgeting";
import Scheduling from "./Components/ServicePages/Scheduling";
// import Constructability from "./Components/ServicePages/Constructability"
import Value from "./Components/ServicePages/value";
import General from "./Components/ServicePages/General";
import Gas from "./Components/ServicePages/Gas";
import Water from "./Components/ServicePages/Water";
import Layout from "./Components/ServicePages/Layout";
import RiskAnalysis from "./Components/ServicePages/RiskAnalysis";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavContainer />
                {/* <Spacer height="40px" /> */}
                <Header1 />
                {/* <Header /> */}
                <Spacer height="20px" />
                <Services />
                {/* <Services1 /> */}

                <Projects />
                <Ongoing />
                <AboutUs />
                <Milestones />
                <VisionMission />
                <ContactUs />
                <Footer />
              </div>
            }
          />

          <Route path="/planning" element={<Planning />} />
          <Route path="/programmingDesign" element={<ProgramDesign />} />
          <Route path="/finalDesign" element={<Finaldesign />} />
          <Route path="/advertiseAward" element={<Advertise />} />
          <Route path="/budgeting" element={<Budgeting />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/riskAnalysis" element={<RiskAnalysis />} />
          <Route path="/valueAnalysis" element={<Value />} />
          <Route path="/generalConstruction" element={<General />} />
          <Route path="/gasPowerInfrastructure" element={<Gas />} />
          <Route path="/waterInfrastructure" element={<Water />} />
          <Route path="/layoutLandscaping" element={<Layout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
