import React from 'react';
import { Nav } from 'react-bootstrap';
import { StyledNav } from './styles';

function NavBar() {
  return (
    <StyledNav>
      <Nav>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Page">Page</Nav.Link>
        </Nav.Item>
      </Nav>
    </StyledNav>
  );
}

export default NavBar;
