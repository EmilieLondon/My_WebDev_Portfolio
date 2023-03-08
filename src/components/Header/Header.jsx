import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function Header() {
  return ( 
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Emilie Godin-Depaul</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="home">Home</Link>
          <Link to="contact">Contact</Link>
          <Link to="project">Portfolio</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header;