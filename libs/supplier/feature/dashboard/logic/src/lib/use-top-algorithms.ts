import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Cell } from '@smarthome/common/ui';
import { useWindowDimensions } from '@smarthome/common/logic';
import { SupplierRoutes } from '@smarthome/common/service';
import { RootState } from '@smarthome/supplier/store';
import { TopAlgorithmsSlice } from '@smarthome/supplier/feature/dashboard/state';
import { BaseAlgorithm, AlgorithmTopExec } from './algorithms-top.interface';
import { algorithmTopExecutionsDataParser } from './algorithm-top-executions-data-parser';
import { algorithmTopRatingDataParser } from './algorithm-top-rating-data-parser';
import { algorithmTopExecutionsCellsParser } from './algorithm-top-executions-cells-parser';
import { algorithmTopRatingCellsParser } from './algorithm-top-rating-cell-parser';

export function useTopAlgorithms() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [tableTopRatingData, setTopRatingData] = useState<BaseAlgorithm[]>([]);
  const [tableTopRatingCells, setTopRatingCells] = useState<
    Cell<keyof BaseAlgorithm>[]
  >([]);
  const [tableTopExecutionsData, setTopExecutionsData] = useState<
    AlgorithmTopExec[]
  >([]);
  const [tableTopExecutionsCells, setTopExecutionsCells] = useState<
    Cell<keyof AlgorithmTopExec>[]
  >([]);
  const [tableBodyPlaceholder] = useState<string>('No data');

  const { topExecutionsAlgorithms, topRatingAlgorithms } = useSelector(
    (state: RootState) => state.topAlgorithms
  );
  const { width } = useWindowDimensions();
  const {
    breakpoints: {
      inPixels: { tablet, desktop },
    },
  } = useContext(ThemeContext);

  useEffect(() => {
    setTopExecutionsData(
      algorithmTopExecutionsDataParser(
        topExecutionsAlgorithms,
        'more',
        (id: string) => () => {
          history.push(
            `${SupplierRoutes.Algorithms}/${encodeURIComponent(id)}`
          );
        }
      )
    );
  }, [history, topExecutionsAlgorithms]);

  useEffect(() => {
    setTopRatingData(
      algorithmTopRatingDataParser(
        topRatingAlgorithms,
        'more',
        (id: string) => () => {
          history.push(
            `${SupplierRoutes.Algorithms}/${encodeURIComponent(id)}`
          );
        }
      )
    );
  }, [history, topRatingAlgorithms]);

  useEffect(() => {
    setTopExecutionsCells(
      algorithmTopExecutionsCellsParser(width, { desktop, tablet })
    );
    setTopRatingCells(
      algorithmTopRatingCellsParser(width, { desktop, tablet })
    );
  }, [width, tablet, desktop]);

  useEffect(() => {
    dispatch(TopAlgorithmsSlice.fetchTopExecutionsAlgorithmsStart());
    dispatch(TopAlgorithmsSlice.fetchTopRatingAlgorithmsStart());
  }, [dispatch]);

  return {
    tableTopRatingData,
    tableTopRatingCells,
    tableTopExecutionsCells,
    tableTopExecutionsData,
    tableBodyPlaceholder,
  };
}
