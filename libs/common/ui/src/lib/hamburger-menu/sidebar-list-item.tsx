import React, { ReactNode, useCallback } from 'react';
import styled from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { regularStyle } from '../p';

export interface SidebarListItemProps {
  text: string;
  showText: boolean;
  icon: ReactNode;
  linkRoute: string;
  clicked: boolean;
  index: number;
  onClick: (index: number) => void;
}

const StyledSidebarListItem = styled(
  <T extends { clicked: boolean } & NavLinkProps>({ clicked, ...props }: T) => (
    <NavLink {...props} />
  )
)`
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

const Text = styled(
  <
    T extends { clicked: boolean; show: boolean } & React.HTMLProps<
      HTMLDivElement
    >
  >({
    show,
    clicked,
    ...props
  }: T) => <div {...props} />
)`
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

  ${(props) => props.theme.breakpoints.desktop} {
    font-size: 20px;
    line-height: 26px;
  }
`;

const IconContainer = styled(
  <T extends { clicked: boolean } & React.HTMLProps<HTMLDivElement>>({
    clicked,
    ...props
  }: T) => <div {...props} />
)`
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
  linkRoute,
  clicked,
  index,
  onClick,
}) => {
  const handleListItemClick = useCallback(() => {
    onClick(index);
  }, [index, onClick]);
  return (
    <li>
      <StyledSidebarListItem
        to={linkRoute}
        clicked={clicked}
        onClick={handleListItemClick}
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
