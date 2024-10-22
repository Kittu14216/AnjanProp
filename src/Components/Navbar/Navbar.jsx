import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../public/logo.png";
import "./Navbar.css"; // Custom CSS for styling

function NavContainer() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand href="#logo">
          <img
            src={logo}
            alt="Logo"
            width="135"
            height="35"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Collapsible links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto nav-links">
            {/* Navbar Links */}
            <Nav.Link href="#home" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link href="#services" className="nav-item">
              Services
            </Nav.Link>
            <Nav.Link href="#projects" className="nav-item">
              Projects
            </Nav.Link>
            <Nav.Link href="#about" className="nav-item">
              About Us
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-item">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavContainer;
