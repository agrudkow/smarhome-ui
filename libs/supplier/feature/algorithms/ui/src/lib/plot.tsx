import React, { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
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
import { OvalBoxContainer } from '@smarthome/common/ui';
import { AlgorithmStatistics } from '@smarthome/supplier/feature/algorithms/logic';
import { DeepReadonly } from 'utility-types';

export interface PlotProps {
  data: DeepReadonly<Array<AlgorithmStatistics>>;
}

const CustomTooltip: FC<TooltipProps> = ({ active, payload }) => {
  return active ? (
    <OvalBoxContainer>{payload?.[0].value}</OvalBoxContainer>
  ) : null;
};

export const Plot: FC<PlotProps> = ({ data }) => {
  const {
    palette: { plot },
  } = useContext(ThemeContext);

  return (
    <ResponsiveContainer>
      <BarChart data={data} margin={{ bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day">
          <Label value="Day of the month" offset={0} position="bottom" />
        </XAxis>
        <YAxis dataKey="executionNumber">
          <Label
            value="Number of execution"
            angle={-90}
            offset={10}
            position="insideLeft"
          />
        </YAxis>
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="executionNumber" stackId="a" fill={plot} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Plot;
