import React, { FC } from 'react';
import styled from 'styled-components';

const StyledOvalBoxContainer = styled.div`
  padding: 15px;
  height: 400px;
  min-height: 180px;
  border-radius: 15px;
  box-shadow: ${({
    theme: {
      palette: {
        rgb: { secondaryBackground },
      },
    },
  }) => `0 0 10px rgba(${secondaryBackground}, 0.25)`};
`;

export const OvalBoxContainer: FC = ({ children }) => (
  <StyledOvalBoxContainer>{children}</StyledOvalBoxContainer>
);

export default OvalBoxContainer;
