import { ReactNode } from 'react';

export type TotalMonthlyBilling = {
  billed: ReactNode;
  time: ReactNode;
};

export type ExecutionBilling = {
  algorithmDisplayName: ReactNode;
  datasetDisplayName: ReactNode;
  date: ReactNode;
  billed: ReactNode;
  button: ReactNode;
};
