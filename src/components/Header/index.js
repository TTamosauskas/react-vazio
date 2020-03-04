import React from 'react';
import { FaPlus } from 'react-icons/fa';

import './styles.css';

function Header() {
  return (
    <header className="head p-4">
      <h1>
        <FaPlus color="#84beff" size={20} />
        React Vazio
      </h1>
    </header>
  );
}

export default Header;
