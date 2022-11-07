import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
import React from 'react';
function NavbarDarkExample() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Kevin Friday</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbar-dark-example" /> */}
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Menu"
              menuVariant="dark"
             align={{ lg: 'end' }}
              
            >
              <NavDropdown.Item >
              <Link to="/">Home</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Link to="/work">Work</Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Link to="/about">About</Link>
              </NavDropdown.Item>
              <NavDropdown.Item><Link to="/contact">Contact</Link></NavDropdown.Item>
     
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDarkExample;