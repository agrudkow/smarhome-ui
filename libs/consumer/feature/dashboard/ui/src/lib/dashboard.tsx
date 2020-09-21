import React from 'react';
import styled from 'styled-components';
import {
  InfoHeader,
  UnderlinedContainer,
  H5,
  PaginatedTable,
  regularSpacing,
} from '@smarthome/common/ui';
import {
  ExecutionBilling,
  useResultsetsList,
} from '@smarthome/consumer/feature/resultsets/logic';
import { useBillings } from '@smarthome/consumer/feature/dashboard/logic';
import TotalBilling from './total-billing';
import BillingsPlot from './billings-plot';

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
  const { tableData, tableCells, tableBodyPlaceholder } = useResultsetsList();
  const { billing, currentDate, handleChangeMonthFactory } = useBillings();

  return (
    <>
      <InfoHeader
        headerText={'Dashboard'}
        infoMessageText={
          'This view allows you to check your current billinng information like an overall billing for the month and the list of recentliy billed execuitons of algorithms on datasets.'
        }
      />
      <UnderlinedContainer />
      <TotalBilling
        billedAmount={billing?.billed ?? '-'}
        billedTime={billing?.milliseconds ?? '-'}
        month={currentDate.getMonth()}
        year={currentDate.getFullYear()}
        onNextMonthClick={handleChangeMonthFactory(1)}
        onPreviousMonthClick={handleChangeMonthFactory(-1)}
      />
      <BillingsPlot data={billing?.dailyBillings ?? []} />
      <TableContainer>
        <PaginatedTable<ExecutionBilling>
          data={tableData}
          cells={tableCells}
          bodyPlaceholderText={tableBodyPlaceholder}
          title={
            <RecentBillingsTabelTitle>
              <H5>Latest executions</H5>
            </RecentBillingsTabelTitle>
          }
        />
      </TableContainer>
    </>
  );
};

export default Dashboard;
