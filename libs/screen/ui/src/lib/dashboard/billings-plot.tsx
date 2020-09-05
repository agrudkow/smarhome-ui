import React, { FC } from 'react';
import styled from 'styled-components';
import { OvalBoxContainer, H5 } from '@smarthome/common/ui';
import Plot from './plot';
import { DailyBilling } from '@smarthome/screen/logic';

const PlotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 15px 0;
`;

export const BillingsPlot: FC<{ data: DailyBilling[] }> = ({ data }) => {
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
