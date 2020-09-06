import { ReactNode } from 'react';

export type BaseDataset = {
  name: ReactNode;
  briefDescription: ReactNode;
  button: ReactNode;
};

export type Dataset = {
  name: ReactNode;
  description: ReactNode;
  creator: ReactNode;
};
