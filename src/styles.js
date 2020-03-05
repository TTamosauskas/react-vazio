import styled from 'styled-components';
import { linkColor } from './mainStyles';

export const StyledComponent = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    font-family: 'Roboto', sans-serif;
  }

  html,
  body,
  #container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #container main {
    display: flex;
    flex-direction: column;
  }

  a {
    color: ${linkColor};
  }

  /* CSS Mobile First  */

  @media (min-width: 600px) {
    background: #fefefe;
  }
`;
