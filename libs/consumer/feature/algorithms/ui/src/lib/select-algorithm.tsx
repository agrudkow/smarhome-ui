import React, { FC } from 'react';
import styled from 'styled-components';
import {
  BaseAlgorithm,
  useSelectAlgorithm,
} from '@smarthome/consumer/feature/algorithms/logic';
import {
  InfoHeader,
  SearchBar,
  PaginatedTable,
  regularSpaceBetweenViewStyle,
  BackButton,
} from '@smarthome/common/ui';

const StyledSelectAlgorithmt = styled.div`
  ${regularSpaceBetweenViewStyle}
`;

export const SelectAlgorithm: FC = () => {
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
  } = useSelectAlgorithm();

  return (
    <StyledSelectAlgorithmt>
      <div>
        <InfoHeader
          headerText={'Select algorithm'}
          infoMessageText={
            'This view allows you to search through owned dataset. You can dispaly all dataset by leaving search input empty or you can fill it up and search dataset by key words (provided text will be treated as separate tags by which algorithms will be searched). Additionaly you can sort result by name.'
          }
        />
        <SearchBar
          inputPlaceHolder={
            'Type comma seperated tags or leave it empty to search all algorithms'
          }
          inputValue={searchValue ?? searchPhrase}
          onSearch={handleSearch}
          onInputValueChange={handleSearchInputChange}
        />
        <PaginatedTable<BaseAlgorithm>
          data={tableData}
          cells={tableCells}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          bodyPlaceholderText={tableBodyPlaceholder}
        />
      </div>
      <BackButton onClick={handleBackClick} />
    </StyledSelectAlgorithmt>
  );
};

export default SelectAlgorithm;
