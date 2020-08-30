import React, { FC } from 'react';
import styled from 'styled-components';

const StyledUnderlinedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid
    ${({
      theme: {
        palette: { primary },
      },
    }) => primary};

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const UnderlinedContainer: FC = ({ children }) => (
  <StyledUnderlinedContainer>{children}</StyledUnderlinedContainer>
);

export default UnderlinedContainer;
