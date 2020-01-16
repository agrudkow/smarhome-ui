import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { regularStyle } from '../p';

export interface SidebarListItemProps {
  text: string;
  showText: boolean;
  icon: ReactNode;
  linkRoute: string;
}

const StyledSidebarListItem = styled(NavLink)<{ clicked: boolean }>`
  height: 45px;
  padding: 12px 16px;
  background-color: ${({ clicked, theme }) =>
    clicked ? theme.palette.secondarySidebarContrastBackground : 'transparent'};
  border-left: 2px solid
    ${({ theme, clicked }) => (clicked ? theme.palette.primary : 'transparent')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: background-color 0.3s ease-in-out, border-left 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;
`;

const Text = styled.div<{ show: boolean; clicked: boolean }>`
  ${regularStyle};
  color: ${({ clicked, theme }) =>
    clicked ? theme.palette.primary : theme.palette.primarySidebarBackground};
  overflow: hidden;
  white-space: nowrap;
  padding-top: 2px;
  transition: max-width 0.3s ease-in-out, opacity 0.3s ease-in-out,
    padding-left 0.3s ease-in-out, color 0.3s ease-in-out;
  max-width: ${({ show, theme }) =>
    show ? `${theme.layout.sidebarWidth.desktop}px` : '0'};
  opacity: ${({ show }) => (show ? 1 : 0)};
  padding-left: ${({ show }) => (show ? '20px' : 0)};

  ${props => props.theme.breakpoints.desktop} {
    font-size: 20px;
    line-height: 26px;
  }
`;

const IconContainer = styled.div<{ clicked: boolean }>`
  min-width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  path {
    transition: fill 0.3s ease-in-out;
    fill: ${({ clicked, theme }) =>
      clicked ? theme.palette.primary : theme.palette.primarySidebarBackground};
  }
`;

export const SidebarListItem: React.FC<SidebarListItemProps> = ({
  text,
  showText,
  icon,
  linkRoute
}) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <li>
      <StyledSidebarListItem
        to={linkRoute}
        onClick={handleClick}
        clicked={clicked}
      >
        <IconContainer clicked={clicked}>{icon}</IconContainer>
        <Text clicked={clicked} show={showText}>
          {text}
        </Text>
      </StyledSidebarListItem>
    </li>
  );
};

export default SidebarListItem;
