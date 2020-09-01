import React, {
  FC,
  useState,
  useContext,
  useCallback,
  ChangeEvent,
  useEffect,
} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  BaseAlgorithm,
  algorithmsDataParser,
  algorithmsCellsParser,
} from '@smarthome/screen/logic';
import { useWindowDimensions } from '@smarthome/common/logic';
import { ThemeContext } from 'styled-components';
import { fetchAlgorithmsList } from '@smarthome/screen/service';
import { Routes } from '@smarthome/common/service';
import {
  InfoHeader,
  SearchBar,
  PaginatedTable,
  Cell,
} from '@smarthome/common/ui';

export const SelectAlgorithm: FC = () => {
  const history = useHistory();
  const { id: datasetId } = useParams<{ id: string }>();
  const [tableData, setTableData] = useState<BaseAlgorithm[]>([]);
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const [tableCells, setTableCells] = useState<Cell<keyof BaseAlgorithm>[]>([]);
  const [orderBy, setOrderBy] = useState<keyof BaseAlgorithm>('rating');
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
      algorithmsDataParser(
        fetchAlgorithmsList(),
        'slelect',
        (id: string) => () => {
          history.push(
            `/${Routes.Execute}/${encodeURIComponent(id)}/${encodeURIComponent(
              datasetId
            )}`
          );
        }
      )
    );
    setTableBodyPlaceholder('No results, please try again using diffrent tags');
  }, [datasetId, history, searchValue]);

  useEffect(() => {
    const cells = algorithmsCellsParser(width, { desktop, tablet });
    setTableCells(cells);
  }, [width, tablet, desktop]);

  useEffect(() => {
    const cells = algorithmsCellsParser(width, { desktop, tablet });
    setTableCells(cells);
  }, [width, tablet, desktop]);
  return (
    <>
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
        inputValue={searchValue || ''}
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

export default SelectAlgorithm;
