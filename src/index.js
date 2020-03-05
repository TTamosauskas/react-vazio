import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { StyledComponent } from './styles';

ReactDOM.render(
  <StyledComponent>
    <App />
  </StyledComponent>,
  document.getElementById('container')
);
