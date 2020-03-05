import React from 'react';
import { Nav } from 'react-bootstrap';
import './styles.css';

function NavBar() {
  return (
    <Nav className="p-4">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" href="/Page">
          Page
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
