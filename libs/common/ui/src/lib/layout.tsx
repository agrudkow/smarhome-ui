import React, {
  useState,
  useCallback,
  useContext,
  useLayoutEffect,
} from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { Sidebar, SidebarLinkProps } from './hamburger-menu';
import Header from './header';
import MainContainer from './main-container';
import { useWindowDimensions } from '@smarthome/common/logic';

interface LayoutProps {
  sidebarLinks: SidebarLinkProps[];
  loading: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  sidebarLinks,
  loading,
}) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const { pathname } = useLocation();
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
        viewName={
          sidebarLinks.find((item) => `/${item.route}` === pathname)?.text ?? ''
        }
        loading={loading}
      />
      <Sidebar
        show={showSidebar}
        onShowSidebarClick={handleShowSidebarClick}
        items={sidebarLinks}
      >
        <MainContainer dissableScroll={showSidebar}>{children}</MainContainer>
      </Sidebar>
    </>
  );
};

export default Layout;
