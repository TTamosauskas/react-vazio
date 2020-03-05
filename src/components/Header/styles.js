import styled, { keyframes } from 'styled-components';
import { flip } from 'react-animations';

const flipAnimation = keyframes`${flip}`;

export const StyledHeader = styled.header`
  svg {
    animation: 3s ${flipAnimation} infinite;
  }

  @media (min-width: 600px) {
    /* CSS desktopo aqui  */
  }
`;
