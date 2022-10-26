import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <Navbar    style={{
        background:"#ffff"}} expand="lg">
            <Navbar.Brand href="#home" style={{
                margin:"auto",color:"black"}}>Kevin Friday</Navbar.Brand>
      <Container>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About Me</Nav.Link>
        <Nav.Link href="#link">Work</Nav.Link>
        <Nav.Link href="#link">Contact Me</Nav.Link>
       
      </Container>
    </Navbar>
  );
}

export default NavBar;