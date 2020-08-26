export interface AlgorithmDTO {
  algorithmId: string;
  algorithmSummary: string;
  algorithmRating: number;
  displayName: string;
}

export interface AlgorithmDetailsDTO extends AlgorithmDTO {
  algorithmDescription: string;
  linkURL: string;
}

export interface AlgorithmBodyDTO extends AlgorithmDetailsDTO {
  algorithmBLOB: string;
}
