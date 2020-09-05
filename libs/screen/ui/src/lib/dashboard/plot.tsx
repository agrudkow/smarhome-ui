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
import { DailyBilling } from '@smarthome/screen/logic';
import { OvalBoxContainer } from '@smarthome/common/ui';

export interface PlotProps {
  data: DailyBilling[];
}

const CustomTooltip: FC<TooltipProps> = ({ active, payload }) => {
  return active ? (
    <OvalBoxContainer>{payload?.[0].value} PLN</OvalBoxContainer>
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
        <YAxis dataKey="billed">
          <Label
            value="Billed (PLN)"
            angle={-90}
            offset={10}
            position="insideLeft"
          />
        </YAxis>
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="billed" stackId="a" fill={plot} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Plot;
