import React, { useState, useContext, useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
  InfoHeader,
  UnderlinedContainer,
  H5,
  PaginatedTable,
  Cell,
  regularSpacing,
} from '@smarthome/common/ui';
import {
  ExecutionBilling,
  executionBillingsCellsParser,
  executionsBillingDataParser,
  TotalMonthlyBilling,
  totalBillingParser,
} from '@smarthome/consumer/feature/resultsets/logic';
import { useWindowDimensions } from '@smarthome/common/logic';
import {
  fetchExecutionBillingList,
  fetchTotalBilling,
} from '@smarthome/consumer/feature/resultsets/service';
import { useHistory } from 'react-router-dom';
import { ConsumerRoutes } from '@smarthome/common/service';
import TotalBilling from './total-billing';
import BillingsPlot from './billings-plot';
import { ClickAwayListener } from '@material-ui/core';

const RecentBillingsTabelTitle = styled.div`
  padding: 15px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TableContainer = styled.div`
  ${regularSpacing}

  padding: 0;
  padding-top: 5px;
`;

export const Dashboard: React.FC = () => {
  const history = useHistory();
  const [totalBilling, setTotalBilling] = useState<
    TotalMonthlyBilling | undefined
  >();
  const [tableData, setTableData] = useState<ExecutionBilling[]>([]);
  const [tableCells, setTableCells] = useState<Cell<keyof ExecutionBilling>[]>(
    []
  );
  const [orderBy, setOrderBy] = useState<keyof ExecutionBilling>('date');
  const [tableBodyPlaceholder] = useState<string>('No data');
  const [currentDate, setCurrentDate] = useState(new Date());
  const { width } = useWindowDimensions();
  const {
    breakpoints: {
      inPixels: { tablet, desktop },
    },
  } = useContext(ThemeContext);

  const handleChangeMonthFactory = (value: number) => () =>
    setCurrentDate(
      (previousValue) =>
        new Date(
          previousValue.getFullYear(),
          previousValue.getMonth() + value,
          previousValue.getDate()
        )
    );

  useEffect(() => {
    const cells = executionBillingsCellsParser(width, { desktop, tablet });
    setTableCells(cells);
  }, [width, tablet, desktop]);

  useEffect(() => {
    (async () => {
      setTotalBilling(totalBillingParser(await fetchTotalBilling(currentDate)));
      setTableData(
        executionsBillingDataParser(
          await fetchExecutionBillingList(),
          'more',
          (resultsetId: string) => () => {
            history.push(
              `${ConsumerRoutes.Execution}/${encodeURIComponent(resultsetId)}`
            );
          }
        )
      );
    })();
  }, [history, currentDate]);

  return (
    <>
      <InfoHeader
        headerText={'Dashboard'}
        infoMessageText={
          'This view allows you to check your current billinng information like an overall billing for month, a plot the most billed datsets and list of recentliy billed execuitons of algorithms on datasets.'
        }
      />
      <UnderlinedContainer />
      <TotalBilling
        billedAmount={totalBilling?.billed ?? '-'}
        billedTime={totalBilling?.time ?? '-'}
        month={currentDate.getMonth()}
        year={currentDate.getFullYear()}
        onNextMonthClick={handleChangeMonthFactory(1)}
        onPreviousMonthClick={handleChangeMonthFactory(-1)}
      />
      <BillingsPlot data={totalBilling?.dailyBillings ?? []} />
      <TableContainer>
        <PaginatedTable<ExecutionBilling>
          data={tableData}
          cells={tableCells}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          bodyPlaceholderText={tableBodyPlaceholder}
          title={
            <RecentBillingsTabelTitle>
              <H5>Latest billed executions</H5>
            </RecentBillingsTabelTitle>
          }
        />
      </TableContainer>
    </>
  );
};

export default Dashboard;
