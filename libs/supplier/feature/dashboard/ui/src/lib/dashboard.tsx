import React from 'react';
import styled from 'styled-components';
import {
  InfoHeader,
  UnderlinedContainer,
  regularSpacing,
  PaginatedTable,
  H5,
} from '@smarthome/common/ui';
import {
  BaseAlgorithm,
  AlgorithmTopExec,
  useBillings,
  useTopAlgorithms,
} from '@smarthome/supplier/feature/dashboard/logic';
import TotalBilling from './total-billing';
import BillingsPlot from './billings-plot';

const TableContainer = styled.div`
  ${regularSpacing}

  padding: 0;
  padding-top: 5px;
`;

const RecentBillingsTabelTitle = styled.div`
  padding: 15px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Dashboard: React.FC = () => {
  const { billing, currentDate, handleChangeMonthFactory } = useBillings();
  const {
    tableTopRatingData,
    tableTopRatingCells,
    tableTopExecutionsCells,
    tableTopExecutionsData,
    tableBodyPlaceholder,
  } = useTopAlgorithms();

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
        income={billing?.billed ?? '-'}
        numberOfExecutions={billing?.numberOfExecutions ?? '-'}
        month={currentDate.getMonth()}
        year={currentDate.getFullYear()}
        onNextMonthClick={handleChangeMonthFactory(1)}
        onPreviousMonthClick={handleChangeMonthFactory(-1)}
      />
      <BillingsPlot incomes={billing?.dailyBillings ?? []} />
      <TableContainer>
        <PaginatedTable<BaseAlgorithm>
          data={tableTopRatingData}
          cells={tableTopRatingCells}
          bodyPlaceholderText={tableBodyPlaceholder}
          footer={false}
          rowsPerPage={5}
          title={
            <RecentBillingsTabelTitle>
              <H5>Top 5 best rated algorithms</H5>
            </RecentBillingsTabelTitle>
          }
        />
      </TableContainer>
      <TableContainer>
        <PaginatedTable<AlgorithmTopExec>
          data={tableTopExecutionsData}
          cells={tableTopExecutionsCells}
          bodyPlaceholderText={tableBodyPlaceholder}
          footer={false}
          rowsPerPage={5}
          title={
            <RecentBillingsTabelTitle>
              <H5>Top 5 most popular algorithms</H5>
            </RecentBillingsTabelTitle>
          }
        />
      </TableContainer>
    </>
  );
};

export default Dashboard;
