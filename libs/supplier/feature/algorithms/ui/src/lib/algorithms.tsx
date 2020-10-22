import React, { FC } from 'react';
import styled from 'styled-components';
import {
  InfoHeader,
  SearchBar,
  PaginatedTable,
  FloatingAddButton,
  OvalBoxContainer,
  UnderlinedContainer,
} from '@smarthome/common/ui';
import { Algorithm } from '@smarthome/supplier/feature/algorithms/logic';
import AddAlgorithm from './add-algorithm';
import { useAlgorithmsList } from '@smarthome/supplier/feature/algorithms/logic';

const StyledAlgorithm = styled.div`
  padding-bottom: 60px; //Accommodate floating buttom
`;

export const Algorithms: FC = () => {
  const {
    currentView,
    tableData,
    searchValue,
    searchPhrase,
    tableCells,
    orderBy,
    setOrderBy,
    tableBodyPlaceholder,
    handleSearchInputChange,
    handleSearch,
    handleChangeViewFactory,
  } = useAlgorithmsList();

  return (
    <StyledAlgorithm>
      <InfoHeader
        headerText={
          currentView === 'list'
            ? 'List of owned algorithms'
            : 'Add new algorithm'
        }
        infoMessageText={
          currentView === 'list'
            ? 'This view allows you to search through owned algorithms. You can dispaly all algorithms by leaving search input empty or you can fill it up and search algorithm by key words (provided text will be treated as separate tags by which algorithms will be searched). Additionaly you can sort result by name.'
            : "This view alllow you to add create new algorithm. To do so you have to fill the form with name, summary and description. After clicking 'ADD' button algorithm will be created and you will be moved to page where you can add new entities."
        }
      />
      <UnderlinedContainer />
      {currentView === 'list' ? (
        <>
          <SearchBar
            inputPlaceHolder={'Type search phrase'}
            inputValue={searchValue ?? searchPhrase}
            onSearch={handleSearch}
            onInputValueChange={handleSearchInputChange}
          />
          <PaginatedTable<Algorithm>
            data={tableData}
            cells={tableCells}
            orderBy={orderBy}
            setOrderBy={setOrderBy}
            bodyPlaceholderText={tableBodyPlaceholder}
          />
          <FloatingAddButton
            hoverText={'Add algorithm'}
            textWidth={150}
            onClick={handleChangeViewFactory('add-algorithm')}
          />
        </>
      ) : (
        <OvalBoxContainer>
          <AddAlgorithm onCancle={handleChangeViewFactory('list')} />
        </OvalBoxContainer>
      )}
    </StyledAlgorithm>
  );
};

export default Algorithms;
