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
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const OvalBoxContainer: FC<OvalBoxContainerProps> = ({
  height,
  width,
  children,
}) => (
  <StyledOvalBoxContainer height={height} width={width}>
    {children}
  </StyledOvalBoxContainer>
);

export default OvalBoxContainer;
