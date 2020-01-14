import React, { useState, ReactNode } from 'react';
import { SideBar } from './hamburger-menu';
import Header from './header';
import {
  CogsIcon,
  DataBaseIcon,
  PollIcon,
  UserIcon,
  BrainIcon
} from './assets';

const SidebarLinks = [
  {
    text: 'Algorithms',
    icon: <BrainIcon iconColor={''} />
  },
  {
    text: 'Datasets',
    icon: <DataBaseIcon iconColor={''} />
  },
  {
    text: 'Analitics',
    icon: <PollIcon iconColor={''} />
  },
  {
    text: 'User',
    icon: <UserIcon iconColor={''} />
  }
];

export const Layout: React.FC = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Header showViewName={!showSidebar} />
      <SideBar show={showSidebar} onClick={handleClick} items={SidebarLinks}>
        {children}
      </SideBar>
    </>
  );
};

export default Layout;
