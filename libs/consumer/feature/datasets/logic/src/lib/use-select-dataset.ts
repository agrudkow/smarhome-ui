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
  ConsumerAlgorithmRoutes,
} from '@smarthome/common/service';
import { Cell } from '@smarthome/common/ui';
import { datasetsCellsParser } from './datasets-cells-parser';
import { datasetsDataParser } from './datasets-data-parser';
import { BaseDataset } from './dataset.interface';
import { DatasetsListSlice } from '@smarthome/consumer/feature/datasets/state';
import { RootState } from '@smarthome/consumer/store';

export function useSelectDataset() {
  const dispatch = useDispatch();
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

  const handleBackClick = useCallback(() => {
    history.goBack();
  }, [history]);

  useEffect(() => {
    const cells = datasetsCellsParser(width, { desktop, tablet });
    setTableCells(cells);
  }, [width, tablet, desktop]);

  useEffect(() => {
    setTableData(
      datasetsDataParser(datasets, 'select', (id: string) => () => {
        history.push(
          `/${ConsumerRoutes.Algorithms}/${encodeURIComponent(algorithmId)}/${
            ConsumerAlgorithmRoutes.Execute
          }/${encodeURIComponent(id)}`
        );
      })
    );
  }, [algorithmId, datasets, history]);

  useEffect(() => {
    if (loading) {
      setTableBodyPlaceholder('Loading...');
    } else {
      setTableBodyPlaceholder('Click search button to fetch datasets');
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
