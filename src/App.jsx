import "./App.css";
import Header1 from "./Components/Header1/Header1";
import NavContainer from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
// import AdminPanel from "./Components/AdminPanel/Adminpanel";
import AddProject from "./Components/Admin/Admin";
import PinValidation from "./Components/Pin/Pin";
import AddProjectPage from "./Components/AddProject/AddProject";
// import RemoveProject from "./Components/Remove/Remove";

import Projects from "./Components/Projects/Projects";
import Ongoing from "./Components/OngoingProjects/Ongoing";
import ProjectsList from "./Components/ProjectLIst/ProjectList";
import ProjectDetail from "./Components/ProjectDisplay/ProjectDetails";

import Spacer from "./Components/Spacer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

import General from "./Components/ServicePages/General";
import Gas from "./Components/ServicePages/Gas";
import Water from "./Components/ServicePages/Water";
import Layout from "./Components/ServicePages/Layout";
import RiskAnalysis from "./Components/ServicePages/RiskAnalysis";
import VA from "./Components/ServicePages/VA";
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
                <ProjectsList />
                <AboutUs />
                <Milestones />
                <VisionMission />
                <ContactUs />
                <Footer />
              </div>
            }
          />
          <Route path="/pin" element={<PinValidation />} />

          <Route path="/project/:id" element={<ProjectDetail />} />
          {/* <Route path="/Removing" element={<RemoveProject />} /> */}
          <Route path="/adding" element={<AddProject />} />

          <Route path="/admin" element={<AddProjectPage />} />
          {/* <Route path="/add-project" element={<AddProjectPage />} /> */}
          <Route path="/planning" element={<Planning />} />
          <Route path="/programmingDesign" element={<ProgramDesign />} />
          <Route path="/finalDesign" element={<Finaldesign />} />
          <Route path="/advertiseAward" element={<Advertise />} />
          <Route path="/budgeting" element={<Budgeting />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/riskAnalysis" element={<RiskAnalysis />} />
          <Route path="/valueAnalysis" element={<VA />} />
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
