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
            'This view allows you to select algorithm which will be used to calculate resultset of previously selected dataset.'
          }
        />
        <SearchBar
          inputPlaceHolder={'Type search phrase'}
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
