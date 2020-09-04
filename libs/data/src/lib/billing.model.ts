export interface TotalMonthlyBillingDTO {
  billed: number;
  milliseconds: number;
}

export interface ExecutionBillingDTO {
  algorithmId: string;
  algorithmDisplayName: string;
  datasetId: string;
  datasetDisplayName: string;
  date: string;
  billed: number;
}
