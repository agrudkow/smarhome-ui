import React, { FC } from 'react';
import styled from 'styled-components';

const StyledMainContainer = styled.div`
  /* border: 2px solid red; */
  min-height: 100%;
  margin: 0;
  padding: 5px;

  ${(props) => props.theme.breakpoints.tablet} {
    padding: 10px;
  }

  ${(props) => props.theme.breakpoints.tablet} {
    padding: 20px;
  }
`;

export const MainContainer: FC = ({ children }) => {
  return <StyledMainContainer>{children}</StyledMainContainer>;
};

export default MainContainer;
