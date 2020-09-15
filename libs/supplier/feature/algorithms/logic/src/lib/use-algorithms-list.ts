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
import { SupplierRoutes } from '@smarthome/common/service';
import { Cell } from '@smarthome/common/ui';
import { algorithmsCellsParser } from './algorithms-cells-parser';
import { algorithmsDataParser } from './algorithms-data-parser';
import { Algorithm } from './algorithm.interface';
import { AlgorithmsListSlice } from '@smarthome/supplier/feature/algorithms/state';
import { RootState } from '@smarthome/supplier/store';
import { useSnackbar } from 'notistack';

export type CurrentView = 'list' | 'add-algorithm';

export function useAlgorithmsList() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentView, setCurrentView] = useState<CurrentView>('list');
  const [tableData, setTableData] = useState<Algorithm[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [tableCells, setTableCells] = useState<Cell<keyof Algorithm>[]>([]);
  const [orderBy, setOrderBy] = useState<keyof Algorithm>('name');
  const [tableBodyPlaceholder, setTableBodyPlaceholder] = useState<string>(
    'Click search button to fetch algorithms'
  );
  const { width } = useWindowDimensions();
  const {
    breakpoints: {
      inPixels: { tablet, desktop },
    },
  } = useContext(ThemeContext);
  const { loading, algorithms, error } = useSelector(
    (state: RootState) => state.algorithmsList
  );

  const handleSearchInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    },
    []
  );

  const handleSearch = useCallback(async () => {
    dispatch(AlgorithmsListSlice.fetchAlgorithmsStart(searchValue));
  }, [dispatch, searchValue]);

  const handleChangeViewFactory = useCallback(
    (view: CurrentView) => () => {
      setCurrentView(view);
    },
    []
  );

  useEffect(() => {
    const cells = algorithmsCellsParser(width, { desktop, tablet });
    setTableCells(cells);
  }, [width, tablet, desktop]);

  useEffect(() => {
    setTableData(
      algorithmsDataParser(algorithms, 'more', (id: string) => () => {
        history.push(`${SupplierRoutes.Algorithms}/${encodeURIComponent(id)}`);
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

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
    }
  }, [enqueueSnackbar, error]);

  return {
    currentView,
    tableData,
    searchValue,
    tableCells,
    orderBy,
    setOrderBy,
    tableBodyPlaceholder,
    handleSearchInputChange,
    handleSearch,
    handleChangeViewFactory,
  } as const;
}
