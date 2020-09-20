export interface EnhancedFile extends File {
  fileSize?: number;
  fileType?: string;
}

export interface UploadSourceCodeProps {
  algorithmId: string;
  file: EnhancedFile;
}

export const uploadSourceCode = ({
  algorithmId,
  file,
}: UploadSourceCodeProps): Promise<void> => {
  console.log('algorithmId :>> ', algorithmId);
  console.log('file :>> ', file);
  return new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 9 ? resolve() : reject(new Error('Server error')),
      500
    )
  );
};
