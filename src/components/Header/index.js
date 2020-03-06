import React from 'react';
import { FaReact } from 'react-icons/fa';

import { StyledHeader } from './styles';

function Header() {
  return (
    <StyledHeader>
      <h1>
        <FaReact className="flip p-4" color="#84beff" size={90} />
        React Vazio
      </h1>
    </StyledHeader>
  );
}

export default Header;
