import React from 'react';
import { FaReact } from 'react-icons/fa';

import { StyledComponent } from './styles';

function Header() {
  return (
    <StyledComponent>
      <header className="head">
        <h1>
          <FaReact className="flip p-4" color="#84beff" size={100} />
          React Vazio
        </h1>
      </header>
    </StyledComponent>
  );
}

export default Header;
