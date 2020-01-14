import React, { useState } from 'react';
import { SideBar } from './hamburger-menu';
import Header from './header';

const SideBarMock: string[] = [
  'Test item',
  'Test item',
  'Test item',
  'Test item',
  'Test item',
  'Test item'
];

export const Layout: React.FC = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Header showViewName={!showSidebar} />
      <SideBar show={showSidebar} onClick={handleClick} items={SideBarMock}>
        {children}
      </SideBar>
    </>
  );
};

export default Layout;
