export interface DailyBillingDTO {
  day: number;
  billed: number;
}

export interface TotalMonthlyBillingDTO {
  billed: number;
  milliseconds: number;
  dailyBillings: DailyBillingDTO[];
}

export interface ExecutionBillingDTO {
  resultsetId: string;
  algorithmDisplayName: string;
  datasetDisplayName: string;
  date: string;
  billed: number;
}

export interface PeriodDTO {
  begine: number;
  end: number;
}
