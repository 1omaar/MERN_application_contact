import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css"
function NavbarHome() {
  return (
    <div className="nav_design">
      <Navbar bg="primary" variant="dark">
        <Nav.Link href="#" className="title-design">
          Contact Info
        </Nav.Link>
        <Nav className="mr-auto">
          <Link to="/" className="home_design" >
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
