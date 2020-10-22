import { AlgorithmDetailsDTO } from '@smarthome/data';

export const addAlgorithm: (
  data: Omit<AlgorithmDetailsDTO, 'algorithmId'>
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
