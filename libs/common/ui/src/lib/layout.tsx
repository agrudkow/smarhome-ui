import React, { useState } from 'react';
import { Sidebar, SidebarLinkProps } from './hamburger-menu';
import Header from './header';

interface LayoutProps {
  sidebarLinks: SidebarLinkProps[];
}

export const Layout: React.FC<LayoutProps> = ({ children, sidebarLinks }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Header showViewName={!showSidebar} onButtonClick={handleClick} />
      <Sidebar show={showSidebar} onClick={handleClick} items={sidebarLinks}>
        {children}
      </Sidebar>
    </>
  );
};

export default Layout;
