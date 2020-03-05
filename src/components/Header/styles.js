import styled, { keyframes } from 'styled-components';
import { flip } from 'react-animations';

const flipAnimation = keyframes`${flip}`;

export const StyledComponent = styled.div`
  .flip {
    animation: 3s ${flipAnimation} infinite;
  }

  @media (min-width: 600px) {
    /* CSS desktopo aqui  */
  }
`;
