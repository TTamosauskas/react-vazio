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

  /* Ajustes Não mobile aqui embaixo */

  @media (min-width: 600px) {
    background: ${backgroundColor};
  }
`;
