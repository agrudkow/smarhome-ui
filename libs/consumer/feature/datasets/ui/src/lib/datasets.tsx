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
import {
  BaseDataset,
  useDatasetsList,
} from '@smarthome/consumer/feature/datasets/logic';
import { AddDataset } from './add-dataset';

const StyledDataset = styled.div`
  padding-bottom: 60px; //Accommodate floating buttom
`;

export const Datasets: FC = () => {
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
  } = useDatasetsList();

  return (
    <StyledDataset>
      <InfoHeader
        headerText={
          currentView === 'list' ? 'List of owned datasets' : 'Add new dataset'
        }
        infoMessageText={
          currentView === 'list'
            ? 'This view allows you to search through owned dataset. You can dispaly all dataset by leaving search input empty or you can fill it up and search dataset by key words (provided text will be treated as separate tags by which datasets will be searched). Additionaly you can sort result by name.'
            : "This view alllow you to add create new dataset. To do so you have to fill the form with name, summary and description. After clicking 'ADD' button dataset will be created and you will be moved to page where you can add new entities."
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
          <PaginatedTable<BaseDataset>
            data={tableData}
            cells={tableCells}
            orderBy={orderBy}
            setOrderBy={setOrderBy}
            bodyPlaceholderText={tableBodyPlaceholder}
          />
          <FloatingAddButton
            hoverText={'Add dataset'}
            textWidth={150}
            onClick={handleChangeViewFactory('add-dataset')}
          />
        </>
      ) : (
        <OvalBoxContainer>
          <AddDataset onCancle={handleChangeViewFactory('list')} />
        </OvalBoxContainer>
      )}
    </StyledDataset>
  );
};

export default Datasets;
