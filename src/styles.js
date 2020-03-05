import styled from 'styled-components';
import { linkColor } from './mainStyles';

export const StyledApp = styled.div`
  height: 100%;

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
    width: 100%;
  }

  a {
    color: ${linkColor};
  }

  /* CSS Mobile First  */

  @media (min-width: 600px) {
    background: #fefefe;
  }
`;
