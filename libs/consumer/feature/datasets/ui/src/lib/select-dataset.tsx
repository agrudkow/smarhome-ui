import React, { FC } from 'react';
import styled from 'styled-components';
import {
  InfoHeader,
  SearchBar,
  PaginatedTable,
  regularSpaceBetweenViewStyle,
  BackButton,
} from '@smarthome/common/ui';
import {
  BaseDataset,
  useSelectDataset,
} from '@smarthome/consumer/feature/datasets/logic';

const StyledSelectDataset = styled.div`
  ${regularSpaceBetweenViewStyle}
`;

export const SelectDataset: FC = () => {
  const {
    tableData,
    searchValue,
    searchPhrase,
    tableCells,
    orderBy,
    tableBodyPlaceholder,
    setOrderBy,
    handleSearchInputChange,
    handleSearch,
    handleBackClick,
  } = useSelectDataset();

  return (
    <StyledSelectDataset>
      <div>
        <InfoHeader
          headerText={'Select dataset'}
          infoMessageText={
            'This view allows you to select dataset which will be used during execution of previously selected algorithm.'
          }
        />
        <SearchBar
          inputPlaceHolder={'Type search phrase'}
          inputValue={searchValue ?? searchPhrase}
          onSearch={handleSearch}
          onInputValueChange={handleSearchInputChange}
        />
        <PaginatedTable<BaseDataset>
          data={tableData}
          cells={tableCells}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          bodyPlaceholderText={tableBodyPlaceholder}
        />
      </div>
      <BackButton onClick={handleBackClick} />
    </StyledSelectDataset>
  );
};

export default SelectDataset;
