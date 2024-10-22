import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../public/logo.png";
import "./Navbar.css";

function NavContainer() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}

        <Navbar.Brand href="#logo">
          <img
            src={logo}
            alt="Logo" // Provide an alt text for accessibility
            width="135" // Set the width as needed
            height="35" // Set the height as needed
            className="d-inline-block align-top" // Align the logo properly
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ fontSize: "20px", padding: "2px" }}>
            <Nav.Link
              className="nav-link"
              style={{ marginLeft: "500px" }}
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>

            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About-Us</Nav.Link>

            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavContainer;
