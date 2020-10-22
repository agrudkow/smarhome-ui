export interface UploadEntityProps {
  datasetId: string;
  file: File;
}

export const uploadEntity = ({
  datasetId,
  file,
}: UploadEntityProps): Promise<void> => {
  console.log('datasetId :>> ', datasetId);
  console.log('file :>> ', file);
  return new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 9 ? resolve() : reject(new Error('Server error')),
      500
    )
  );
};
