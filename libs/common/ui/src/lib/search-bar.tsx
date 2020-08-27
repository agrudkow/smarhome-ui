import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { StyledOvalBoxContainer } from './oval-box-container';
import Input from './input';
import BaseButton from './base-button';

/* eslint-disable-next-line */
export interface SearchBarProps {}

const StyledSearchBar = styled(StyledOvalBoxContainer)`
  flex-wrap: wrap;
`;

const SearchButtonContainer = styled.div`
  flex-basis: 100px;
  margin: auto;

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    flex-basis: 100%;
  }
`;

export const SearchBar: FC<SearchBarProps> = () => {
  const {
    palette: {
      rgb: { containerBackgorund },
    },
  } = useContext(ThemeContext);

  return (
    <StyledSearchBar backgroundColor={`rgba(${containerBackgorund}, 0.75)`}>
      <Input placeholder={'Type search phrase or leave it empty to get all.'} />
      <SearchButtonContainer>
        <BaseButton onClick={() => console.log('Click1!!!!')}>
          Search
        </BaseButton>
      </SearchButtonContainer>
    </StyledSearchBar>
  );
};

export default SearchBar;
