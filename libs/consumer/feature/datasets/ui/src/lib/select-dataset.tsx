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
            'This view allows you to search through owned dataset. You can dispaly all dataset by leaving search input empty or you can fill it up and search dataset by key words (provided text will be treated as separate tags by which datasets will be searched). Additionaly you can sort result by name.'
          }
        />
        <SearchBar
          inputPlaceHolder={
            'Type comma seperated tags or leave it empty to search all datasets'
          }
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
