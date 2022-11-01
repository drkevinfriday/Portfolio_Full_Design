import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'


function header() {
  return (
    <Navbar   
     expand="lg" bg='black' className='navbar  navbar-dark p-3 '>
        <LinkContainer to="/">
        <Navbar.Brand>
                Kevin Friday
        </Navbar.Brand>
      </LinkContainer >
      <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  className=' d-flex justify-content-end'>
            <Nav gap={2}  title='Menu' className='nav-links col'>
              <LinkContainer to="/home">
                <Nav.Link className='link-box'>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/work">
                <Nav.Link className='link-box'>Work</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className='link-box'>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className='link-box'>Conatct</Nav.Link>
              </LinkContainer>
            </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default header;