export interface AlgorithmDTO {
  algorithmId: string;
  algorithmSummary: string;
  algorithmRating: number;
  displayName: string;
}

export interface AlgorithmTopExecDTO {
  algorithmId: string;
  algorithmSummary: string;
  algorithmExecutions: number;
  displayName: string;
}

export interface AlgorithmDetailsDTO extends AlgorithmDTO {
  author: string;
  algorithmDescription: string;
  linkURL: string;
}

export interface AlgorithmBodyDTO extends AlgorithmDetailsDTO {
  algorithmBLOB: string;
}
