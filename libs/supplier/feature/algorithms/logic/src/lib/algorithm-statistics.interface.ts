import { ReactNode } from 'react';

export type AlgorithmStatistics = {
  day: number;
  executionNumber: number;
};

export type DailyBilling = {
  day: number;
  billed: number;
};

export type MonthlyAlgorithmsBillings = {
  income: ReactNode;
  expense: ReactNode;
  dailyIncomes: DailyBilling[];
  dailyExpenses: DailyBilling[];
};
