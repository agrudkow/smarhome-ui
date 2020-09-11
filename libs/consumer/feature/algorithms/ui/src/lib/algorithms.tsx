import React, {
  FC,
  useState,
  useEffect,
  useContext,
  useCallback,
  ChangeEvent,
} from 'react';
import { ThemeContext } from 'styled-components';
import {
  PaginatedTable,
  InfoHeader,
  SearchBar,
  Cell,
  UnderlinedContainer,
} from '@smarthome/common/ui';
import { useWindowDimensions } from '@smarthome/common/logic';
import {
  algorithmsDataParser,
  algorithmsCellsParser,
  BaseAlgorithm,
} from '@smarthome/consumer/feature/algorithms/logic';
import { fetchAlgorithmsList } from '@smarthome/consumer/feature/algorithms/service';
import { useHistory } from 'react-router';
import { CustomerRoutes } from '@smarthome/common/service';

export const Algorithms: FC = () => {
  const history = useHistory();
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
      algorithmsDataParser(fetchAlgorithmsList(), 'more', (id: string) => () =>
        history.push(`${CustomerRoutes.Algorithms}/${encodeURIComponent(id)}`)
      )
    );
    setTableBodyPlaceholder('No results, please try again using diffrent tags');
  }, [history, searchValue]);

  useEffect(() => {
    const cells = algorithmsCellsParser(width, { desktop, tablet });
    setTableCells(cells);
  }, [width, tablet, desktop]);

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
          'Type comma seperated tags or leave it empty to search all datasets'
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

export default Algorithms;
