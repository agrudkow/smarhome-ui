import React, { FC } from 'react';
import styled from 'styled-components';
import { OvalBoxContainer, H5 } from '@smarthome/common/ui';
import Plot from './plot';
import { DeepReadonly } from 'utility-types';
import { DailySupplierBillingDTO } from '@smarthome/data';

const PlotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 15px 0;
`;

export const BillingsPlot: FC<{
  incomes: DeepReadonly<DailySupplierBillingDTO[]>;
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
