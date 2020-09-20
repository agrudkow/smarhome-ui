export interface ExecuteProps {
  algorithmId: string;
  datasetId: string;
}

export const execute: (data: ExecuteProps) => Promise<string> = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 9
          ? resolve('234')
          : reject(new Error('Server error')),
      500
    )
  );
