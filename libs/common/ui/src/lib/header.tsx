import React from 'react';

import styled from 'styled-components';
import { regularStyle } from './p';

interface HeaderProps {
  showViewName: boolean;
}

type AppNameProps = HeaderProps;
type ViewNameProps = HeaderProps;

const StyledHeader = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.palette.secondaryBackground};
  width: 100%;
  height: 40px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const AppName = styled.div<AppNameProps>`
  ${regularStyle};
  color: ${({ theme }) => theme.palette.primaryBackground};
  position: absolute;
  margin: 0 15px;
  transition: left 0.3s ease-in-out, transform 0.3s ease-in-out;
  left: ${({ showViewName, theme }) =>
    showViewName ? theme.layout.sidebarWidth.mobile + 'px' : '50%'};
  transform: ${({ showViewName }) =>
    showViewName ? 'none' : 'translateX(-50%)'};

  ${props => props.theme.breakpoints.desktop} {
    font-size: 30px;
    line-height: 30px;
    white-space: nowrap;
  }
`;

const ViewName = styled(AppName)<ViewNameProps>`
  left: ${({ showViewName }) => (showViewName ? '50%' : '100%')};
  transform: ${({ showViewName }) =>
    showViewName ? 'translateX(-50%)' : 'none'};
`;

export const Header: React.FC<HeaderProps> = ({ showViewName }) => {
  return (
    <StyledHeader>
      <AppName showViewName={showViewName}>Smarthome</AppName>
      <ViewName showViewName={showViewName}>Current view</ViewName>
    </StyledHeader>
  );
};

export default Header;
