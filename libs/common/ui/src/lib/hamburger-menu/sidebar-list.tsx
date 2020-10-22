import React from 'react';
import styled from 'styled-components';
import SidebarListItem from './sidebar-list-item';
import { SidebarLinkProps } from './sidebar';

export interface SidebarListProps {
  show: boolean;
  items: SidebarLinkProps[];
}

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const SidebarList: React.FC<SidebarListProps> = ({ items, show }) => {
  return (
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
  );
};

export default SidebarList;
