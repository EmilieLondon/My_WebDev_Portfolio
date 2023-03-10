import React from "react";
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <Nav  variant="tabs" defaultactiveKey="/home">
        <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="portfolio">Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="contact">Contact</Nav.Link>
      </Nav.Item>
          </Nav>
  );
}

export default Header;