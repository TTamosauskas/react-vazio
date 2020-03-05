import styled from 'styled-components';

const backgroundColor = '#fefefe';

export const StyledComponent = styled.div`
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

  /* CSS Mobile First  */

  @media (min-width: 600px) {
    /* CSS desktopo aqui  */
  }
`;
