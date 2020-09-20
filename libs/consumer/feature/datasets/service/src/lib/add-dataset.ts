import { DatasetDetailsDTO } from '@smarthome/data';

export const addDataset: (
  data: Omit<DatasetDetailsDTO, 'datasetId'>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
) => Promise<string> = (data) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 9
          ? resolve('324')
          : reject(new Error('Server error')),
      500
    )
  );
