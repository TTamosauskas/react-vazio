import React from 'react';
import { Nav } from 'react-bootstrap';
import { StyledComponent } from './styles';

function NavBar() {
  return (
    <StyledComponent>
      <nav>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Page">Page</Nav.Link>
          </Nav.Item>
        </Nav>
      </nav>
    </StyledComponent>
  );
}

export default NavBar;
