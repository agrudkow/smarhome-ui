import React, { FC } from 'react';
import styled from 'styled-components';

interface StyledOvalBoxContainerProps {
  height?: number;
  width?: number;
}

type OvalBoxContainerProps = StyledOvalBoxContainerProps;

const StyledOvalBoxContainer = styled.div<StyledOvalBoxContainerProps>`
  display: flex;
  padding: 15px;
  margin: 15px 0;
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  border-radius: 15px;
  box-shadow: ${({
    theme: {
      palette: {
        rgb: { secondaryBackground },
      },
    },
  }) => `0 0 10px rgba(${secondaryBackground}, 0.25)`};
`;

export const OvalBoxContainer: FC<OvalBoxContainerProps> = ({
  height,
  width, 
  children,
}) => (
  <StyledOvalBoxContainer height={height} width={width} >{children}</StyledOvalBoxContainer>
);

export default OvalBoxContainer;
