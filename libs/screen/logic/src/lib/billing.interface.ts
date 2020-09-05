import { ReactNode } from 'react';

export type DailyBilling = {
  day: string;
  billed: number;
};

export type TotalMonthlyBilling = {
  billed: ReactNode;
  time: ReactNode;
  dailyBillings: DailyBilling[];
};

export type ExecutionBilling = {
  algorithmDisplayName: ReactNode;
  datasetDisplayName: ReactNode;
  date: ReactNode;
  billed: ReactNode;
  button: ReactNode;
};
