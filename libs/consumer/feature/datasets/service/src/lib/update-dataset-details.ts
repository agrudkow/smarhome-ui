import { DatasetDetailsDTO } from '@smarthome/data';

export const updateDatasetDetails: (
  data: DatasetDetailsDTO
) => Promise<void> = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 9 ? resolve() : reject(new Error('Server error')),
      500
    )
  );
