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
} from '@smarthome/common/ui';
import {
  BaseDataset,
  datasetsDataParser,
  datasetsCellsParser,
} from '@smarthome/screen/logic';
import { fetchDatasetsList } from '@smarthome/screen/service';
import { useWindowDimensions } from '@smarthome/common/logic';
import { useHistory } from 'react-router-dom';
import { Routes } from '@smarthome/common/service';

const StyledDataset = styled.div`
  padding-bottom: 60px; //Accommodate floating buttom
`;

export const Datasets: FC = () => {
  const history = useHistory();
  const [tableData, setTableData] = useState<BaseDataset[]>([]);
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const [tableCells, setTableCells] = useState<Cell<keyof BaseDataset>[]>([]);
  const [orderBy, setOrderBy] = useState<keyof BaseDataset>('name');
  const [tableBodyPlaceholder, setTableBodyPlaceholder] = useState<string>(
    'Click search button to fetch datasets'
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
        history.push(`${Routes.Datasets}/${encodeURIComponent(id)}`);
      })
    );
    setTableBodyPlaceholder('No results, please try again using diffrent tags');
  }, [history, searchValue]);

  useEffect(() => {
    const cells = datasetsCellsParser(width, { desktop, tablet });
    setTableCells(cells);
  }, [width, tablet, desktop]);

  return (
    <StyledDataset>
      <InfoHeader
        headerText={'List of owned datasets'}
        infoMessageText={
          'This view allows you to search through owned dataset. You can dispaly all dataset by leaving search input empty or you can fill it up and search dataset by key words (provided text will be treated as separate tags by which datasets will be searched). Additionaly you can sort result by name.'
        }
      />
      <SearchBar
        inputPlaceHolder={
          'Type comma seperated tags or leave it empty to search all datasets'
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
        onClick={() => {
          console.log('Add');
        }}
      />
    </StyledDataset>
  );
};

export default Datasets;
