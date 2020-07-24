import React, { FC } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { plotData } from './data';

/* eslint-disable-next-line */
export interface PlotProps {}

export const Plot: FC = () => {
  return (
    <ResponsiveContainer>
      <BarChart
        data={plotData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Living room data set" stackId="a" fill="#8884d8" />
        <Bar dataKey="Bedroom data set" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Data set 3" stackId="a" fill="#b23991" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Plot;
