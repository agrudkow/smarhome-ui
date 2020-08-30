import React, { FC, useContext, ChangeEvent } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { StyledOvalBoxContainer } from './oval-box-container';
import Input from './input';
import BaseButton from './base-button';

export interface SearchBarProps {
  onSearch: () => void;
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

export const SearchBar: FC<SearchBarProps> = ({
  inputPlaceHolder,
  onInputValueChange,
  onSearch,
  inputValue,
}) => {
  const {
    palette: {
      rgb: { containerBackgorund },
    },
  } = useContext(ThemeContext);

  return (
    <StyledSearchBar backgroundColor={`rgba(${containerBackgorund}, 0.75)`}>
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
