import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'


function header() {
  return (
    <Navbar   
     expand="lg" className='navbar  navbar-dark p-3 '>
        <LinkContainer to="/">
        <Navbar.Brand>
                Kevin Friday
        </Navbar.Brand>
      </LinkContainer >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className=' nav-box d-flex justify-content-end'>
            <Nav className='nav-links'>
              <LinkContainer to="/home">
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
      </Navbar.Collapse>
    </Navbar>
  );
}

export default header;