export type AlgorithmStatisticsDTO = {
  day: number;
  executionNumber: number;
};

export type DailySupplierBillingDTO = {
  day: string;
  billed: number;
};

export type MonthlySupplierBillingsDTO = {
  income: number;
  expense: number;
  dailyIncomes: DailySupplierBillingDTO[];
  dailyExpenses: DailySupplierBillingDTO[];
};
