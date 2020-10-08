import React, { FC, ChangeEvent } from 'react';
import styled from 'styled-components';
import { StyledOvalBoxContainer } from './oval-box-container';
import Input from './input';
import BaseButton from './base-button';

export interface SearchBarProps {
  /**Search button click handler.*/
  onSearch: () => void;
  /**Search input change handler.*/
  onInputValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  inputPlaceHolder: string;
}

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

/**
 * SearchBar component displays search input with search button.
 *
 * @param props SearchBarProps
 */
export const SearchBar: FC<SearchBarProps> = ({
  inputPlaceHolder,
  onInputValueChange,
  onSearch,
  inputValue,
}) => {
  return (
    <StyledSearchBar>
      <Input
        placeholder={inputPlaceHolder}
        value={inputValue}
        onChange={onInputValueChange}
      />
      <SearchButtonContainer>
        <BaseButton onClick={onSearch}>Search</BaseButton>
      </SearchButtonContainer>
    </StyledSearchBar>
  );
};

export default SearchBar;
