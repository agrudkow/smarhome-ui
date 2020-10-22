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
import { datasetsCellsParser } from './datasets-cells-parser';
import { datasetsDataParser } from './datasets-data-parser';
import { BaseDataset } from './dataset.interface';
import { DatasetsListSlice } from '@smarthome/consumer/feature/datasets/state';
import { RootState } from '@smarthome/consumer/store';

export type CurrentView = 'list' | 'add-dataset';

export function useDatasetsList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentView, setCurrentView] = useState<CurrentView>('list');
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
  const { loading, datasets, searchPhrase } = useSelector(
    (state: RootState) => state.datasetsList
  );

  const handleSearchInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    },
    []
  );

  const handleSearch = useCallback(async () => {
    dispatch(DatasetsListSlice.fetchDatasetsStart(searchValue ?? ''));
  }, [dispatch, searchValue]);

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

  useEffect(() => {
    setTableData(
      datasetsDataParser(datasets, 'more', (id: string) => () => {
        history.push(`${ConsumerRoutes.Datasets}/${encodeURIComponent(id)}`);
      })
    );
  }, [datasets, history]);

  useEffect(() => {
    if (loading) {
      setTableBodyPlaceholder('Loading...');
    } else {
      setTableBodyPlaceholder('Click search button to fetch datasets');
    }
  }, [loading]);

  return {
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
  } as const;
}
