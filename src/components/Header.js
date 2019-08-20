import React  from 'react';
import {Navbar, Nav, NavItem, Container, NavbarToggler, Collapse} from 'reactstrap';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default class Header extends React.Component {
 state = {
   isOpen: false
 };

 
  toggle = () => {
    this.setState((prevState) => ({isOpen: !prevState.isOpen}));
  }

  render() {
    return (
      <div className="header">
          <header>
          <Container fluid className="no-padding">
            <Navbar expand="md" color="dark" dark className="black justify-content-end no-padding">
            <button className="mr-2 navbar-toggler" onClick={this.toggle}>
              <FontAwesomeIcon
                icon={faBars}
                size="2x"
                style={{color:"#ffffff"}}
                pull="right"
                className="navbar-toggler-icon"
                />
              </button>
            <Collapse isOpen={this.state.isOpen} navbar className="justify-content-end">
                <Nav navbar  className="justify-content-end">
                  <NavItem className="header__nav-item"><Link href="#" activeClass="header__nav-link--active" className="header__nav-link" to="app-home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></NavItem>
                  <NavItem className="header__nav-item"><Link href="#" activeClass="header__nav-link--active" className="header__nav-link" to="app-about" spy={true} smooth={true} offset={-70} duration={500}>About</Link></NavItem>
                  <NavItem className="header__nav-item"><Link href="#" activeClass="header__nav-link--active" className="header__nav-link" to="app-toolbox" spy={true} smooth={true} offset={-70} duration={500}>Toolbox</Link></NavItem>
                  <NavItem className="header__nav-item"><Link href="#" activeClass="header__nav-link--active" className="header__nav-link" to="app-portfolio" spy={true} smooth={true} offset={-70} duration={500}>Portfolio</Link></NavItem>
                  <NavItem className="header__nav-item"><Link href="#" activeClass="header__nav-link--active" className="header__nav-link" to="app-testimonials" spy={true} smooth={true} offset={-70} duration={500}>Testimonials</Link></NavItem>
                  <NavItem className="header__nav-item"><Link href="#" activeClass="header__nav-link--active" className="header__nav-link" to="app-contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Container>
          </header>
        </div>
      );
  }

}



/*

            //<Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
             <Nav className="justify-content-end" activeKey="/#home">
               <Nav.Item><Link activeClass="active" href="#home" className="header__nav-link" to="app-home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></Nav.Item>
        //       <Nav.Item><Link activeClass="active" href="#about" className="header__nav-link" to="app-about" spy={true} smooth={true} offset={-70} duration={500}>About</Link></Nav.Item>
        //       <Nav.Item><Link activeClass="active" href="#toolbox" className="header__nav-link" to="app-toolbox" spy={true} smooth={true} offset={-70} duration={500}>Toolbox</Link></Nav.Item>
        //       <Nav.Item><Link activeClass="active" href="#portfolio" className="header__nav-link" to="app-portfolio" spy={true} smooth={true} offset={-70} duration={500}>Portfolio</Link></Nav.Item>
        //       <Nav.Item><Link activeClass="active" href="#testimonials" className="header__nav-link" to="app-testimonials" spy={true} smooth={true} offset={-70} duration={500}>Testimonials</Link></Nav.Item>
        //       <Nav.Item><Link activeClass="active" href="#contact" className="header__nav-link" to="app-contact" spy={true} smooth={true} offset={-70} duration={500}>Contact Me</Link></Nav.Item>
             </Nav>
           </Navbar.Collapse>


           <NavbarToggler light="light" onClick={this.toggle}  className="mr-2" />

*/           