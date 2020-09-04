import React, { FC } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
  Label,
} from 'recharts';
import { plotData } from './data';
import { OvalBoxContainer } from '@smarthome/common/ui';

/* eslint-disable-next-line */
export interface PlotProps {}

const CustomTooltip: FC<TooltipProps> = ({ active, payload }) => {
  return active ? (
    <OvalBoxContainer>{payload?.[0].value} PLN</OvalBoxContainer>
  ) : null;
};

export const Plot: FC = () => {
  return (
    <ResponsiveContainer>
      <BarChart data={plotData} margin={{ bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date">
          <Label value="Day of the month" offset={0} position="bottom" />
        </XAxis>
        <YAxis dataKey="value">
          <Label
            value="Billed (PLN)"
            angle={-90}
            offset={10}
            position="insideLeft"
          />
        </YAxis>
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" stackId="a" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Plot;
