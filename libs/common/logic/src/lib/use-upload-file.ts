import { useState, useCallback, ChangeEvent } from 'react';

export function useUploadFile({
  onFileSend,
}: {
  onFileSend: (file: File) => Promise<void>;
}) {
  const [file, setFile] = useState<File | undefined>();

  const handleDeleteFile = useCallback(() => {
    setFile(undefined);
  }, []);

  const handleSendFile = useCallback(async () => {
    console.log('Send file');
    if (file) {
      await onFileSend(file);
      setFile(undefined);
    }
  }, [file, onFileSend]);

  const handleUploadFile = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFile(event.target.files?.[0]);
    },
    []
  );

  return {
    fileName: file?.name,
    handleDeleteFile,
    handleSendFile,
    handleUploadFile,
  } as const;
}
