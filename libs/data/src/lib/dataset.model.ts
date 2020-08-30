export interface DatasetDTO {
  datasetId: string;
  datasetSummary: string;
  displayName: string;
}

export interface DatasetDetailsDTO extends DatasetDTO {
  datasetDescription: string;
  linkURL: string;
}

export interface DatasetBodyDTO extends DatasetDetailsDTO {
  datasetBLOB: string;
}
