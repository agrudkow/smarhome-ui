import { useHistory } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import {
  useState,
  useContext,
  useCallback,
  ChangeEvent,
  useEffect,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowDimensions } from '@smarthome/common/logic';
import { ConsumerRoutes } from '@smarthome/common/service';
import { Cell } from '@smarthome/common/ui';
import { algorithmsCellsParser } from './algorithms-cells-parser';
import { algorithmsDataParser } from './algorithms-data-parser';
import { BaseAlgorithm } from './algorithm.interface';
import { AlgorithmsListSlice } from '@smarthome/consumer/feature/algorithms/state';
import { RootState } from '@smarthome/consumer/store';

export function useAlgorithmsList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [tableData, setTableData] = useState<BaseAlgorithm[]>([]);
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const [tableCells, setTableCells] = useState<Cell<keyof BaseAlgorithm>[]>([]);
  const [orderBy, setOrderBy] = useState<keyof BaseAlgorithm>('name');
  const [tableBodyPlaceholder, setTableBodyPlaceholder] = useState<string>(
    'Click search button to fetch algorithms'
  );
  const { width } = useWindowDimensions();
  const {
    breakpoints: {
      inPixels: { tablet, desktop },
    },
  } = useContext(ThemeContext);
  const { loading, algorithms, searchPhrase } = useSelector(
    (state: RootState) => state.algorithmsList
  );

  const handleSearchInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    },
    []
  );

  const handleSearch = useCallback(async () => {
    dispatch(AlgorithmsListSlice.fetchAlgorithmsStart(searchValue ?? ''));
  }, [dispatch, searchValue]);

  useEffect(() => {
    const cells = algorithmsCellsParser(width, { desktop, tablet });
    setTableCells(cells);
  }, [width, tablet, desktop]);

  useEffect(() => {
    setTableData(
      algorithmsDataParser(algorithms, 'more', (id: string) => () => {
        history.push(`${ConsumerRoutes.Algorithms}/${encodeURIComponent(id)}`);
      })
    );
  }, [algorithms, history]);

  useEffect(() => {
    if (loading) {
      setTableBodyPlaceholder('Loading...');
    } else {
      setTableBodyPlaceholder('Click search button to fetch algorithms');
    }
  }, [loading]);

  return {
    tableData,
    searchValue,
    searchPhrase,
    tableCells,
    orderBy,
    setOrderBy,
    tableBodyPlaceholder,
    handleSearchInputChange,
    handleSearch,
  } as const;
}
