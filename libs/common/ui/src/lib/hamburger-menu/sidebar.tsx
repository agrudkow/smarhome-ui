import React, { useContext, ReactNode } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { DoubbleArrowHeadRight } from '../assets';
import { regularStyle } from '../p';
import SidebarListItem from './sidebar-list-item';

export interface SidebarLinkProps {
  text: string;
  icon: ReactNode;
  route: string;
}

interface SidebarProps {
  show: boolean;
  onClick: () => void;
  items: SidebarLinkProps[];
}

interface ContainerProps {
  show?: boolean;
}

const SidebarContainer = styled.div<ContainerProps>`
  position: fixed;
  z-index: 9999;
  width: ${({
    show,
    theme: {
      layout: {
        sidebarWidth: { desktop, mobile }
      }
    }
  }) => (show ? desktop : '0')}px;
  height: calc(100% - 40px);
  top: 40px;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.palette.secondarySidebarBackground};
  transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
  color: ${({ theme }) => theme.palette.primarySidebarBackground};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.tablet} {
    z-index: 0;
    width: ${({
      show,
      theme: {
        layout: {
          sidebarWidth: { desktop, mobile }
        }
      }
    }) => (show ? desktop : mobile)}px;
  }
`;

const Content = styled.div<ContainerProps>`
  position: relative;

  ${({ theme }) => theme.breakpoints.tablet} {
    transition: width 0.3s ease-in-out, margin-left 0.3s ease-in-out;
    margin-left: ${({
      show,
      theme: {
        layout: {
          sidebarWidth: { desktop, mobile }
        }
      }
    }) => (show ? desktop : mobile)}px;
    width: calc(
      100vw -
        ${({
          show,
          theme: {
            layout: {
              sidebarWidth: { desktop, mobile }
            }
          }
        }) => (show ? desktop : mobile)}px
    );
  }
`;

const CollapseButton = styled.div`
  position: relative;
  left: 0;
  bottom: 0;
  height: 40px;
  border-top: 1px solid black;
  padding: 10px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

const ButtonText = styled.div<{ show: boolean }>`
  ${regularStyle};
  color: ${({ theme }) => theme.palette.primarySidebarBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  transition: max-width 0.3s ease-in-out, opacity 0.3s ease-in-out,
    padding 0.3s ease-in-out;
  max-width: ${({ show, theme }) =>
    show ? `${theme.layout.sidebarWidth.desktop}px` : '0'};
  opacity: ${({ show }) => (show ? 1 : 0)};
  padding: ${({ show }) => (show ? '2px 10px 0' : 0)};

  ${props => props.theme.breakpoints.desktop} {
    font-size: 20px;
    line-height: 26px;
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const IconContainer = styled.div<{ rotated: boolean }>`
  max-width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform-origin: center;
  transform: rotateZ(${({ rotated }) => (rotated ? '180deg' : '0')});
`;

export const SideBar: React.FC<SidebarProps> = ({
  items,
  show,
  onClick,
  children
}) => {
  const {
    palette: { primarySidebarBackground }
  } = useContext(ThemeContext);

  return (
    <>
      <SidebarContainer show={show}>
        <div>
          <StyledList>
            {items.map((item, index) => (
              <SidebarListItem
                showText={show}
                text={item.text}
                key={index + item.text}
                icon={item.icon}
                linkRoute={item.route}
              />
            ))}
          </StyledList>
        </div>
        <CollapseButton onClick={onClick}>
          <IconContainer rotated={show}>
            <DoubbleArrowHeadRight
              iconColor={primarySidebarBackground}
              width={'20px'}
              height={'20px'}
            />
          </IconContainer>
          <ButtonText show={show}>Collapse sidebar</ButtonText>
        </CollapseButton>
      </SidebarContainer>
      <Content show={show}>{children}</Content>
    </>
  );
};
