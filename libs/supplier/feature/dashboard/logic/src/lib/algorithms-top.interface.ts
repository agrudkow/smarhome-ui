import { ReactNode } from 'react';

export type BaseAlgorithm = {
  name: ReactNode;
  briefDescription: ReactNode;
  rating?: ReactNode;
  button: ReactNode;
};

export type AlgorithmTopExec = {
  name: ReactNode;
  briefDescription: ReactNode;
  executions: ReactNode;
  button: ReactNode;
};
