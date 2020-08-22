import React, { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import OvalBoxContainer from './oval-box-container';
import Input from './input';
import BaseButton from './base-button';

/* eslint-disable-next-line */
export interface SearchBarProps {}

export const SearchBar: FC<SearchBarProps> = () => {
  const {
    palette: {
      rgb: { containerBackgorund },
    },
  } = useContext(ThemeContext);

  return (
    <OvalBoxContainer backgroundColor={`rgba(${containerBackgorund}, 0.75)`}>
      <Input placeholder={'Type search phrase or leave it empty to get all.'} />
      <BaseButton
        onClick={() => console.log('Click1!!!!')}
        style={{ margin: '6px 0 6px 6px' }}
      >
        Search
      </BaseButton>
    </OvalBoxContainer>
  );
};

export default SearchBar;
