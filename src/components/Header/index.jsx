import React  from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-scroll";

function Header() {

    return (
      <header className="app-header">
        <Navbar fixed="top" bg="dark" expand="md" variant="dark" className="justify-content-end">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
          <Nav className="justify-content-end" activeKey="/#home">
            <Nav.Item><Link activeClass="active" href="#home" className="nav-link" to="app-home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></Nav.Item>
            <Nav.Item><Link activeClass="active" href="#about" className="nav-link" to="app-about" spy={true} smooth={true} offset={-70} duration={500}>About</Link></Nav.Item>
            <Nav.Item><Link activeClass="active" href="#toolbox" className="nav-link" to="app-toolbox" spy={true} smooth={true} offset={-70} duration={500}>Toolbox</Link></Nav.Item>
            <Nav.Item><Link activeClass="active" href="#portfolio" className="nav-link" to="app-portfolio" spy={true} smooth={true} offset={-70} duration={500}>Portfolio</Link></Nav.Item>
            <Nav.Item><Link activeClass="active" href="#testimonials" className="nav-link" to="app-testimonials" spy={true} smooth={true} offset={-70} duration={500}>Testimonials</Link></Nav.Item>
            <Nav.Item><Link activeClass="active" href="#contact" className="nav-link" to="app-contact" spy={true} smooth={true} offset={-70} duration={500}>Contact Me</Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </header>
    );
}


export default Header;