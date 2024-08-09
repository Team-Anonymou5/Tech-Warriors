import React from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./css/BootstrapNavBar.css";
import logo from "../assets/logo2.gif";

export default function BootstrapNavBar() {
  return (
    <Navbar bg="transpernt" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src={logo}
            className="d-inline-block align-top"
          />{" "}
          {/* DAL '24 */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            {/* Use Link component instead of Nav.Link */}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              All Opportunities
            </Nav.Link>
            <Nav.Link as={Link} to="/comitee">
            Hackathons
            </Nav.Link>
            <Nav.Link as={Link} to="/speaker">
            Competiotions
            </Nav.Link>
            {/* <NavDropdown title="For Attendees" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/schedule">
                Schedule
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/venue">
                Venue
              </NavDropdown.Item>
            </NavDropdown> */}
            
            <Nav.Link as={Link} to="/registration">
            Events
            </Nav.Link>
            <Nav.Link as={Link} to="/registration">
            About Us
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
