import { ReactNode } from 'react';

export type BaseAlgorithm = {
  name: ReactNode;
  briefDescription: ReactNode;
  rating?: ReactNode;
  button: ReactNode;
};

export type Algorithm = BaseAlgorithm & {
  description: ReactNode;
};
