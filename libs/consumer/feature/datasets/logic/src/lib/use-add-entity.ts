import { useState, useCallback, ChangeEvent } from 'react';

export function useAddEntity() {
  const [file, setFile] = useState<File | undefined>();

  const handleDeleteFile = useCallback(() => {
    setFile(undefined);
  }, []);

  const handleAddEntity = useCallback(() => {
    console.log('Send file');
    setFile(undefined);
  }, []);

  const handleUploadFile = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFile(event.target.files?.[0]);
    },
    []
  );

  return {
    fileName: file?.name,
    handleDeleteFile,
    handleAddEntity,
    handleUploadFile,
  } as const;
}
