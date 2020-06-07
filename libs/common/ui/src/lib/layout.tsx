import React, {
  useState,
  useCallback,
  useContext,
  useLayoutEffect,
} from 'react';
import { Sidebar, SidebarLinkProps } from './hamburger-menu';
import Header from './header';
import MainContainer from './main-container';
import { useWindowDimensions } from '@smarthome/common/logic';
import { ThemeContext } from 'styled-components';

interface LayoutProps {
  sidebarLinks: SidebarLinkProps[];
}

export const Layout: React.FC<LayoutProps> = ({ children, sidebarLinks }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<number>(0);

  const { width } = useWindowDimensions();

  const {
    breakpoints: {
      inPixels: { desktop },
    },
  } = useContext(ThemeContext);

  const handleShowSidebarClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.stopPropagation();
      setShowSidebar((showSidebar) => !showSidebar);
    },
    []
  );
  const handleViewClick = (viewId: number) => setCurrentView(viewId);

  useLayoutEffect(() => {
    const desktopView = width >= desktop;
    if (desktopView) {
      setShowSidebar(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header
        showViewName={!showSidebar}
        onButtonClick={handleShowSidebarClick}
        viewName={sidebarLinks[currentView].text}
      />
      <Sidebar
        show={showSidebar}
        onShowSidebarClick={handleShowSidebarClick}
        items={sidebarLinks}
        currentViewId={currentView}
        onSelectViewClick={handleViewClick}
      >
        <MainContainer>{children}</MainContainer>
      </Sidebar>
    </>
  );
};

export default Layout;
