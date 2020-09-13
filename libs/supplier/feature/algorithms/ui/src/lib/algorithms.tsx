import React, {
  FC,
  useState,
  useContext,
  useEffect,
  useCallback,
  ChangeEvent,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
  InfoHeader,
  SearchBar,
  PaginatedTable,
  Cell,
  FloatingAddButton,
  OvalBoxContainer,
  UnderlinedContainer,
} from '@smarthome/common/ui';
import {
  BaseDataset,
  datasetsDataParser,
  datasetsCellsParser,
} from '@smarthome/consumer/feature/datasets/logic';
import { fetchDatasetsList } from '@smarthome/consumer/feature/datasets/service';
import { useWindowDimensions } from '@smarthome/common/logic';
import { useHistory } from 'react-router-dom';
import { SupplierRoutes } from '@smarthome/common/service';

type CurrentView = 'list' | 'add-dataset';

const StyledDataset = styled.div`
  padding-bottom: 60px; //Accommodate floating buttom
`;

export const Algorithms: FC = () => {
  const history = useHistory();
  const [currentView, setCurrentView] = useState<CurrentView>('list');
  const [tableData, setTableData] = useState<BaseDataset[]>([]);
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const [tableCells, setTableCells] = useState<Cell<keyof BaseDataset>[]>([]);
  const [orderBy, setOrderBy] = useState<keyof BaseDataset>('name');
  const [tableBodyPlaceholder, setTableBodyPlaceholder] = useState<string>(
    'Click search button to fetch algorithms'
  );
  const { width } = useWindowDimensions();
  const {
    breakpoints: {
      inPixels: { tablet, desktop },
    },
  } = useContext(ThemeContext);

  const handleSearchInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    },
    []
  );

  const handleSearch = useCallback(() => {
    console.log('searchValue :>> ', searchValue);
    setTableData(
      datasetsDataParser(fetchDatasetsList(), 'more', (id: string) => () => {
        history.push(`${SupplierRoutes.Algorithms}/${encodeURIComponent(id)}`);
      })
    );
    setTableBodyPlaceholder('No results, please try again using diffrent tags');
  }, [history, searchValue]);

  const handleChangeViewFactory = useCallback(
    (view: CurrentView) => () => {
      setCurrentView(view);
    },
    []
  );

  useEffect(() => {
    const cells = datasetsCellsParser(width, { desktop, tablet });
    setTableCells(cells);
  }, [width, tablet, desktop]);

  return (
    <StyledDataset>
      <InfoHeader
        headerText={
          currentView === 'list'
            ? 'List of owned algorithms'
            : 'Add new algorithm'
        }
        infoMessageText={
          currentView === 'list'
            ? 'This view allows you to search through owned algorithms. You can dispaly all dataset by leaving search input empty or you can fill it up and search dataset by key words (provided text will be treated as separate tags by which datasets will be searched). Additionaly you can sort result by name.'
            : "This view alllow you to add create new algorithm. To do so you have to fill the form with name, summary and description. After clicking 'ADD' button dataset will be created and you will be moved to page where you can add new entities."
        }
      />
      <UnderlinedContainer />
      {currentView === 'list' ? (
        <>
          <SearchBar
            inputPlaceHolder={
              'Type comma seperated tags or leave it empty to get all algorithms'
            }
            inputValue={searchValue || ''}
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
          {/* <AddDataset onCancle={handleChangeViewFactory('list')} /> */}
        </OvalBoxContainer>
      )}
    </StyledDataset>
  );
};

export default Algorithms;
