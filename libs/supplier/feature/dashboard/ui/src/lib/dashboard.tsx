import React, { useState, useEffect, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
  InfoHeader,
  UnderlinedContainer,
  regularSpacing,
  PaginatedTable,
  H5,
  Cell,
} from '@smarthome/common/ui';
import { SupplierRoutes } from '@smarthome/common/service';
import {
  BaseAlgorithm,
  AlgorithmTopExec,
  algorithmTopExecutionsCellsParser,
  algorithmTopRatingDataParser,
  algorithmTopRatingCellsParser,
  algorithmTopExecutionsDataParser,
  useBillings,
} from '@smarthome/supplier/feature/dashboard/logic';
import {
  fetchTopExecutionsAlgorithms,
  fetchTopRatingAlgorithms,
} from '@smarthome/supplier/feature/dashboard/service';
import TotalBilling from './total-billing';
import BillingsPlot from './billings-plot';
import { useWindowDimensions } from '@smarthome/common/logic';
import { useHistory } from 'react-router-dom';

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
  const { width } = useWindowDimensions();
  const {
    breakpoints: {
      inPixels: { tablet, desktop },
    },
  } = useContext(ThemeContext);

  useEffect(() => {
    setTopExecutionsData(
      algorithmTopExecutionsDataParser(
        fetchTopExecutionsAlgorithms(),
        'more',
        (id: string) => () => {
          history.push(
            `${SupplierRoutes.Algorithms}/${encodeURIComponent(id)}`
          );
        }
      )
    );
    setTopRatingData(
      algorithmTopRatingDataParser(
        fetchTopRatingAlgorithms(),
        'more',
        (id: string) => () => {
          history.push(
            `${SupplierRoutes.Algorithms}/${encodeURIComponent(id)}`
          );
        }
      )
    );
  }, [history]);

  useEffect(() => {
    setTopExecutionsCells(
      algorithmTopExecutionsCellsParser(width, { desktop, tablet })
    );
    setTopRatingCells(
      algorithmTopRatingCellsParser(width, { desktop, tablet })
    );
  }, [width, tablet, desktop]);

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
