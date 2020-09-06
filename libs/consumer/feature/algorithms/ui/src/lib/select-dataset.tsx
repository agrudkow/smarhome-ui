import React, {
  FC,
  useState,
  useContext,
  useEffect,
  useCallback,
  ChangeEvent,
} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import {
  InfoHeader,
  SearchBar,
  PaginatedTable,
  Cell,
} from '@smarthome/common/ui';
import {
  BaseDataset,
  datasetsDataParser,
  datasetsCellsParser,
} from '@smarthome/consumer/feature/datasets/logic';
import { fetchDatasetsList } from '@smarthome/consumer/feature/datasets/service';
import { useWindowDimensions } from '@smarthome/common/logic';
import { Routes, AlgorithmRoutes } from '@smarthome/common/service';

export const SelectDataset: FC = () => {
  const history = useHistory();
  const { id: algorithmId } = useParams<{ id: string }>();
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
      datasetsDataParser(fetchDatasetsList(), 'select', (id: string) => () => {
        history.push(
          `/${Routes.Algorithms}/${encodeURIComponent(algorithmId)}/${
            AlgorithmRoutes.Execute
          }/${encodeURIComponent(id)}`
        );
      })
    );
    setTableBodyPlaceholder('No results, please try again using diffrent tags');
  }, [algorithmId, history, searchValue]);

  useEffect(() => {
    const cells = datasetsCellsParser(width, { desktop, tablet });
    setTableCells(cells);
  }, [width, tablet, desktop]);

  return (
    <>
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
    </>
  );
};

export default SelectDataset;
