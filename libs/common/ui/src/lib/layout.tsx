import React, { useState } from 'react';
import { SideBar, SidebarLinkProps } from './hamburger-menu';
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
      <SideBar show={showSidebar} onClick={handleClick} items={sidebarLinks}>
        {children}
      </SideBar>
    </>
  );
};

export default Layout;
