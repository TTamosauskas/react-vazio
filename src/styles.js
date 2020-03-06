import styled from 'styled-components';
import { linkColor } from './GlobalStyles';

export const StyledApp = styled.div`
  height: 100%;

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
