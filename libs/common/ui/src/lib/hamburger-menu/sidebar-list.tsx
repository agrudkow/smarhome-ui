import React, { useState, useCallback } from 'react';
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
  const [listItemsState, setListItemsState] = useState<boolean[]>(
    new Array(items.length).fill(false)
  );

  const handleListItemClick = useCallback(
    (index: number) => {
      const newState = listItemsState.map((_, idx) => idx === index ? true : false);
      setListItemsState(newState);
    },
    [listItemsState],
  )

  return (
    <StyledList>
      {items.map((item, index) => (
        <SidebarListItem
          showText={show}
          text={item.text}
          key={index + item.text}
          icon={item.icon}
          linkRoute={item.route}
          clicked={listItemsState[index]}
          index={index}
          onClick={handleListItemClick}
        />
      ))}
    </StyledList>
  );
};

export default SidebarList;
