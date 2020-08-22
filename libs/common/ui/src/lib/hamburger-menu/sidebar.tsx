import React, { useContext, ReactNode } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { DoubbleArrowHeadRight } from '../assets';
import { regularTypography } from '../p';
import SidebarList from './sidebar-list';
import { useWindowDimensions } from '@smarthome/common/logic';

export interface SidebarLinkProps {
  text: string;
  icon: ReactNode;
  route: string;
}

interface SidebarProps {
  show: boolean;
  onShowSidebarClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  items: SidebarLinkProps[];
}

interface ContainerProps {
  show?: boolean;
}

const SidebarContainer = styled.div<ContainerProps>`
  position: -webkit-sticky;
  position: sticky;
  width: ${({
    show,
    theme: {
      layout: {
        sidebarWidth: { desktop },
      },
    },
  }) => (show ? desktop : '0')}px;
  height: calc(
    100vh -
      ${({
        theme: {
          layout: { headerHeight },
        },
      }) => headerHeight}px
  );
  z-index: 9999;
  top: ${({
    theme: {
      layout: { headerHeight },
    },
  }) => headerHeight}px;
  background-color: ${({ theme }) => theme.palette.secondarySidebarBackground};
  transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
  color: ${({ theme }) => theme.palette.primarySidebarBackground};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.tablet} {
    transition: flex-basis 0.3s ease-in-out, left 0.3s ease-in-out;
    flex-basis: ${({
      show,
      theme: {
        layout: {
          sidebarWidth: { desktop, mobile },
        },
      },
    }) => (show ? desktop : mobile)}px;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    z-index: 0;
  }
`;

const Content = styled.div<ContainerProps>`
  flex: 1;
  overflow: hidden;
  min-height: calc(
    100vh -
      ${({
        theme: {
          layout: { headerHeight },
        },
      }) => headerHeight}px
  );
  /* max-height: calc(
    100vh -
      ${({
        theme: {
          layout: { headerHeight },
        },
      }) => headerHeight}px
  ); */
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

const ButtonText = styled(({ show: boolean, ...props }) => <div {...props} />)`
  ${regularTypography};
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

  ${(props) => props.theme.breakpoints.desktop} {
    font-size: 20px;
    line-height: 26px;
  }
`;

const IconContainer = styled(
  <T extends { rotated: boolean } & React.HTMLProps<HTMLDivElement>>({
    rotated,
    ...props
  }: T) => <div {...props} />
)`
  max-width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform-origin: center;
  transform: rotateZ(${({ rotated }) => (rotated ? '180deg' : '0')});
`;

const Overlay = styled.div`
  display: block;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  z-index: 300;
  height: calc(
    100vh -
      ${({
        theme: {
          layout: { headerHeight },
        },
      }) => headerHeight}px
  );

  ${({ theme }) => theme.breakpoints.desktop} {
    display: none;
  }
`;

const Window = styled.div`
  display: flex;
`;

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  show,
  onShowSidebarClick,
  children,
}) => {
  const {
    palette: { primarySidebarBackground },
    breakpoints: {
      inPixels: { desktop },
    },
  } = useContext(ThemeContext);
  const { width } = useWindowDimensions();
  const notDesktopView = width < desktop;

  return (
    <Window>
      <SidebarContainer show={show}>
        <SidebarList items={items} show={show} />
        <CollapseButton onClick={onShowSidebarClick}>
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
      {show && (
        <Overlay onClick={notDesktopView ? onShowSidebarClick : undefined} />
      )}
      <Content show={show}>{children}</Content>
    </Window>
  );
};
