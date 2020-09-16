import { AlgorithmDetailsDTO } from '@smarthome/data';

export const updateAlgorithmDetails: (
  data: AlgorithmDetailsDTO
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
) => Promise<void> = (data) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 9 ? resolve() : reject(new Error('Server error')),
      500
    )
  );
