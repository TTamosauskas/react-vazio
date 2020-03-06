import styled from 'styled-components';
import { Roboto, linkColor } from './GlobalStyles';

export const StyledApp = styled.div`

${Roboto}

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
