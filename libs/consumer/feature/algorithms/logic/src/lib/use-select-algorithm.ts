import { useHistory, useParams } from 'react-router-dom';
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
import {
  ConsumerRoutes,
  ConsumerDatasetRoutes,
} from '@smarthome/common/service';
import { Cell } from '@smarthome/common/ui';
import { algorithmsCellsParser } from './algorithms-cells-parser';
import { algorithmsDataParser } from './algorithms-data-parser';
import { BaseAlgorithm } from './algorithm.interface';
import { AlgorithmsListSlice } from '@smarthome/consumer/feature/algorithms/state';
import { RootState } from '@smarthome/consumer/store';

export function useSelectAlgorithm() {
  const dispatch = useDispatch();
  const { id: datasetId } = useParams<{ id: string }>();
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

  const handleBackClick = useCallback(() => {
    history.goBack();
  }, [history]);

  useEffect(() => {
    const cells = algorithmsCellsParser(width, { desktop, tablet });
    setTableCells(cells);
  }, [width, tablet, desktop]);

  useEffect(() => {
    setTableData(
      algorithmsDataParser(algorithms, 'select', (id: string) => () => {
        history.push(
          `/${ConsumerRoutes.Datasets}/${encodeURIComponent(datasetId)}/${
            ConsumerDatasetRoutes.Execute
          }/${encodeURIComponent(id)}`
        );
      })
    );
  }, [algorithms, datasetId, history]);

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
    tableBodyPlaceholder,
    setOrderBy,
    handleSearchInputChange,
    handleSearch,
    handleBackClick,
  } as const;
}
