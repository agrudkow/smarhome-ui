import React, { FC } from 'react';
import styled from 'styled-components';

const StyledMainContainer = styled.div<{ dissableScroll: boolean }>`
  min-height: 100%;
  margin: 0;
  padding: 5px;
  overflow: ${({ dissableScroll }) => (dissableScroll ? 'hidden' : 'unset')};
  height: ${({
    dissableScroll,
    theme: {
      layout: { headerHeight },
    },
  }) => (dissableScroll ? `calc(100vh - ${headerHeight + 10}px)` : 'unset')};

  ${(props) => props.theme.breakpoints.tablet} {
    padding: 10px;
    overflow: unset;
    height: unset;
  }

  ${(props) => props.theme.breakpoints.desktop} {
    padding: 20px;
  }
`;

export const MainContainer: FC<{ dissableScroll: boolean }> = ({
  children,
  dissableScroll,
}) => {
  return (
    <StyledMainContainer dissableScroll={dissableScroll}>
      {children}
    </StyledMainContainer>
  );
};

export default MainContainer;
