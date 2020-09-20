import React, { FC } from 'react';
import {
  PaginatedTable,
  InfoHeader,
  SearchBar,
  UnderlinedContainer,
} from '@smarthome/common/ui';
import {
  BaseAlgorithm,
  useAlgorithmsList,
} from '@smarthome/consumer/feature/algorithms/logic';

export const Algorithms: FC = () => {
  const {
    tableData,
    searchValue,
    searchPhrase,
    tableCells,
    orderBy,
    setOrderBy,
    tableBodyPlaceholder,
    handleSearchInputChange,
    handleSearch,
  } = useAlgorithmsList();

  return (
    <>
      <InfoHeader
        headerText={'List of avaliable algorithms'}
        infoMessageText={
          'This view allows you to search through avaliable algortihms provided by suppliers. You can dispaly all algorithms by leaving search input empty or you can fill it up and search algorithms by key words (provided text will be treated as separate tags by which algorithms will be searched). Additionaly you can sort result by name and rating.'
        }
      />
      <UnderlinedContainer />
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
    </>
  );
};

export default Algorithms;
