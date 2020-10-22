import React, { FC } from 'react';
import styled from 'styled-components';
import { DeepReadonly } from 'utility-types';
import { OvalBoxContainer, H5 } from '@smarthome/common/ui';
import { DailyBillingDTO } from '@smarthome/data';
import Plot from './plot';

const PlotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 15px 0;
`;

export const BillingsPlot: FC<{ data: DeepReadonly<DailyBillingDTO[]> }> = ({
  data,
}) => {
  return (
    <OvalBoxContainer height={400}>
      <PlotContainer>
        <H5>Current month billings (per each day)</H5>
        <br />
        <Plot data={data} />
      </PlotContainer>
    </OvalBoxContainer>
  );
};

export default BillingsPlot;
