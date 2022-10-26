import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'


function header() {
  return (
    <Navbar   
     expand="lg">
        <LinkContainer to="/">
        <Navbar.Brand>
                Kevin Friday
        </Navbar.Brand>
      </LinkContainer >
      <Nav>
        <LinkContainer to="/Home">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/work">
          <Nav.Link>Work</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/contact">
          <Nav.Link>Conatct</Nav.Link>
        </LinkContainer>

      </Nav>
    </Navbar>
  );
}

export default header;