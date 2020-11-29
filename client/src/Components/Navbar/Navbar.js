import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css"
function NavbarHome() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Nav.Link href="#" style={{color:"white"}}>
          Contact Info
        </Nav.Link>
        <Nav className="mr-auto">
          <Link to="/" className="home_design">
            Home
          </Link>
          <Link to="/resume" className="resume_design">
            Resume
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarHome;
