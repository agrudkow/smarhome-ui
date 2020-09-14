import React, { FC } from 'react';
import styled from 'styled-components';
import { OvalBoxContainer, H5 } from '@smarthome/common/ui';
import Plot from './plot';
import { DailyBilling } from '@smarthome/consumer/feature/resultsets/logic';

const PlotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 15px 0;
`;

export const BillingsPlot: FC<{
  incomes: DailyBilling[];
}> = ({ incomes }) => {
  return (
    <OvalBoxContainer height={400}>
      <PlotContainer>
        <H5>Daily incomes</H5>
        <br />
        <Plot data={incomes} />
      </PlotContainer>
    </OvalBoxContainer>
  );
};

export default BillingsPlot;
