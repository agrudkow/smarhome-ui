import React, { FC } from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Tooltip, TooltipProps } from 'recharts';
import { OvalBoxContainer } from '@smarthome/common/ui';

/* eslint-disable-next-line */
export interface PieChartsProps {}

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];

const StyledPieCharts = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const CustomTooltip: FC<TooltipProps> = ({ active, payload }) => {
  return active ? (
    <OvalBoxContainer>{payload?.[0].name}</OvalBoxContainer>
  ) : null;
};

export const PieCharts: FC<PieChartsProps> = () => {
  return (
    <StyledPieCharts>
      <OvalBoxContainer width={400} height={400}>
        <PieChart width={400} height={400}>
          <Pie
            isAnimationActive={false}
            data={data01}
            cx={200}
            cy={200}
            outerRadius={100}
            fill="#8884d8"
            label
            dataKey="value"
          />
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </OvalBoxContainer>
      <OvalBoxContainer width={400} height={400}>
        <PieChart width={400} height={400}>
          <Pie
            data={data02}
            cx={200}
            cy={200}
            innerRadius={40}
            outerRadius={100}
            fill="#82ca9d"
            dataKey="value"
          />
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </OvalBoxContainer>
    </StyledPieCharts>
  );
};

export default PieCharts;
