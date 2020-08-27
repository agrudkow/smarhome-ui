import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface StyledOvalBoxContainerProps {
  height?: number;
  width?: number;
  backgroundColor?: string;
  opacity?: number;
  boxShadow?: boolean;
}

type OvalBoxContainerProps = StyledOvalBoxContainerProps;

export const regularSpacing = css`
  padding: 5px 15px;
  margin: 15px 0;

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    padding: 5px 5px;
    margin: 5px 0;
  }
`;

const boxShadowCSS = css`
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledOvalBoxContainer = styled.div<StyledOvalBoxContainerProps>`
  ${regularSpacing};

  flex: 1;
  display: flex;
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  background-color: ${({ backgroundColor }) => backgroundColor};
  opacity: ${({ opacity }) => opacity};
  border-radius: 6px;

  ${({ boxShadow }) => boxShadow && boxShadowCSS}
`;

export const OvalBoxContainer: FC<OvalBoxContainerProps> = ({
  height,
  width,
  backgroundColor = '#fff',
  opacity = 1,
  boxShadow = true,
  children,
}) => {
  return (
    <StyledOvalBoxContainer
      {...{ height, width, backgroundColor, opacity, boxShadow }}
    >
      {children}
    </StyledOvalBoxContainer>
  );
};

export default OvalBoxContainer;
