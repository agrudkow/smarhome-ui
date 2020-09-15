import { ReactNode } from 'react';

export type Algorithm = {
  name: ReactNode;
  briefDescription: ReactNode;
  rating?: ReactNode;
  button: ReactNode;
};

export type DetailedAlgorithm = Algorithm & {
  description: ReactNode;
};
