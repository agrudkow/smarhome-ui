import React, { useState, useContext, useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
  OvalBoxContainer,
  InfoHeader,
  UnderlinedContainer,
  H5,
  H4,
  StyledOvalBoxContainer,
  PaginatedTable,
  Cell,
} from '@smarthome/common/ui';
import Plot from './plot';
import {
  ExecutionBilling,
  executionBillingsCellsParser,
  executionsBillingDataParser,
  TotalMonthlyBilling,
  totalBillingParser,
} from '@smarthome/screen/logic';
import { useWindowDimensions } from '@smarthome/common/logic';
import {
  fetchExecutionBillingList,
  fetchTotalBilling,
} from '@smarthome/screen/service';
import { useHistory } from 'react-router-dom';
import { Routes } from '@smarthome/common/service';

const PlotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 15px 0;
`;

const TotalBillingInfoOvalBoxContainer = styled(StyledOvalBoxContainer)`
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;
`;

const TotalBillingInfo = styled.div`
  display: flex;
`;

const TotalBilledHeader = styled(H4)`
  font-weight: 500;
`;

const RecentBillingsTabelTitle = styled.div`
  padding: 15px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  const { width } = useWindowDimensions();
  const {
    breakpoints: {
      inPixels: { tablet, desktop },
    },
  } = useContext(ThemeContext);

  useEffect(() => {
    const cells = executionBillingsCellsParser(width, { desktop, tablet });
    setTableCells(cells);
  }, [width, tablet, desktop]);

  useEffect(() => {
    setTotalBilling(totalBillingParser(fetchTotalBilling()));
    setTableData(
      executionsBillingDataParser(
        fetchExecutionBillingList(),
        'more',
        (datasetId: string, algorithmId: string) => () => {
          history.push(
            `${Routes.Executions}/${encodeURIComponent(
              datasetId
            )}/${encodeURIComponent(algorithmId)}`
          );
        }
      )
    );
  }, [history]);

  return (
    <>
      <InfoHeader
        headerText={'Dashboard'}
        infoMessageText={
          'This view allows you to check your current billinng information like an overall billing for month, a plot the most billed datsets and list of recentliy billed execuitons of algorithms on datasets.'
        }
      />
      <UnderlinedContainer />
      <TotalBillingInfoOvalBoxContainer>
        <TotalBillingInfo>
          <TotalBilledHeader>Billed in total:&nbsp;</TotalBilledHeader>
          <H4>{totalBilling?.billed ?? '-'} PLN</H4>
        </TotalBillingInfo>
        <TotalBillingInfo>
          <TotalBilledHeader>Billed time in total:&nbsp;</TotalBilledHeader>
          <H4>{totalBilling?.time ?? '-'}</H4>
        </TotalBillingInfo>
      </TotalBillingInfoOvalBoxContainer>
      <OvalBoxContainer height={400}>
        <PlotContainer>
          <H5>Current month billing per each day</H5>
          <br />
          <Plot />
        </PlotContainer>
      </OvalBoxContainer>

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
    </>
  );
};

export default Dashboard;
