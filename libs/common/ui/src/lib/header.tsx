import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { regularStyle } from './p';
import { useWindowDimensions } from '@smarthome/common/logic';
import { HamburgerButtonIcon } from './assets';

interface AppNameProps {
  showViewName: boolean;
}

type ViewNameProps = AppNameProps;

interface HeaderProps extends ViewNameProps {
  onButtonClick: () => void;
}

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
  justify-content: center;
  overflow: hidden;
`;

const AppName = styled.div<AppNameProps>`
  ${regularStyle};
  color: ${({ theme }) => theme.palette.primaryBackground};
  white-space: nowrap;
  margin: 0 15px;

  ${({ theme }) => theme.breakpoints.tablet} {
    position: absolute;
    transition: left 0.3s ease-in-out, transform 0.3s ease-in-out;
    left: ${({ showViewName, theme }) =>
      showViewName ? theme.layout.sidebarWidth.mobile + 'px' : '50%'};
    transform: ${({ showViewName }) =>
      showViewName ? 'none' : 'translateX(-50%)'};
  }

  ${props => props.theme.breakpoints.desktop} {
    font-size: 30px;
    line-height: 30px;
  }
`;

const ViewName = styled(AppName)<ViewNameProps>`
  ${({ theme }) => theme.breakpoints.tablet} {
    left: ${({ showViewName }) => (showViewName ? '50%' : '100%')};
    transform: ${({ showViewName }) =>
      showViewName ? 'translateX(-50%)' : 'none'};
  }
`;

const HamburgerButton = styled.div<{ show: boolean }>`
  position: absolute;
  left: 15px;
  max-width: ${({ show }) => (show ? '24px' : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: max-width 0.3s ease-in-out;
  cursor: pointer;
`;

export const Header: React.FC<HeaderProps> = ({
  showViewName,
  onButtonClick
}) => {
  const { width } = useWindowDimensions();
  const {
    breakpoints: {
      inPixels: { tablet }
    },
    palette: { primarySidebarBackground }
  } = useContext(ThemeContext);

  const tabletView = width >= tablet;
  return (
    <StyledHeader>
      <AppName showViewName={showViewName}>Smarthome</AppName>
      {!tabletView && (
        <HamburgerButton show={showViewName} onClick={onButtonClick}>
          <HamburgerButtonIcon iconColor={primarySidebarBackground} />
        </HamburgerButton>
      )}
      {tabletView && (
        <ViewName showViewName={showViewName}>Current view</ViewName>
      )}
    </StyledHeader>
  );
};

export default Header;
