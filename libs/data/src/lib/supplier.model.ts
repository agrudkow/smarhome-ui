export type AlgorithmStatisticsDTO = {
  day: number;
  executionNumber: number;
};

export type DailySupplierBillingDTO = {
  day: number;
  billed: number;
};

export interface SupplierTotalMonthlyBillingDTO {
  billed: number;
  numberOfExecutions: number;
  dailyBillings: DailySupplierBillingDTO[];
}
