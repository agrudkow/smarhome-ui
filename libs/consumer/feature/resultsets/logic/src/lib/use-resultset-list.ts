import { useHistory } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { useState, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowDimensions } from '@smarthome/common/logic';
import { ConsumerRoutes } from '@smarthome/common/service';
import { Cell } from '@smarthome/common/ui';
import { ResultsetsListSlice } from '@smarthome/consumer/feature/resultsets/state';
import { RootState } from '@smarthome/consumer/store';
import { executionBillingsCellsParser } from './billing-cells-parser';
import { executionsBillingDataParser } from './billing-data-parser';
import { ExecutionBilling } from './billing.interface';

export type CurrentView = 'list' | 'add-resultset';

export function useResultsetsList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [tableData, setTableData] = useState<ExecutionBilling[]>([]);
  const [tableCells, setTableCells] = useState<Cell<keyof ExecutionBilling>[]>(
    []
  );
  const [tableBodyPlaceholder, setTableBodyPlaceholder] = useState<string>(
    'No data'
  );
  const { width } = useWindowDimensions();
  const {
    breakpoints: {
      inPixels: { tablet, desktop },
    },
  } = useContext(ThemeContext);

  const { loading, resultsets } = useSelector(
    (state: RootState) => state.resultsetsList
  );

  useEffect(() => {
    dispatch(ResultsetsListSlice.fetchResultsetsStart());
  }, [dispatch]);

  useEffect(() => {
    const cells = executionBillingsCellsParser(width, { desktop, tablet });
    setTableCells(cells);
  }, [width, tablet, desktop]);

  useEffect(() => {
    setTableData(
      executionsBillingDataParser(resultsets, 'more', (id: string) => () => {
        history.push(`${ConsumerRoutes.Execution}/${encodeURIComponent(id)}`);
      })
    );
  }, [resultsets, history]);

  useEffect(() => {
    if (loading) {
      setTableBodyPlaceholder('Loading...');
    } else {
      setTableBodyPlaceholder('No data');
    }
  }, [loading]);

  return {
    tableData,
    tableCells,
    tableBodyPlaceholder,
  } as const;
}
