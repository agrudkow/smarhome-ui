import { useState, useCallback, ChangeEvent } from 'react';

/**
 * @function useUploadFile - custom hook which handles UploadFile component logic.
 *
 * @param onFileSend - callback funciton called in handleSendFile
 *
 * @returns
 * @var fileName - name of selected file
 * @function handleDeleteFile - delete selection handler.
 * @function handleSendFile - send file handler.
 * @function handleUploadFile - upload button click handler.
 */
export function useUploadFile({
  onFileSend,
}: {
  onFileSend: (file: File) => Promise<void> | void;
}) {
  const [file, setFile] = useState<File | undefined>();

  const handleDeleteFile = useCallback(() => {
    setFile(undefined);
  }, []);

  const handleSendFile = useCallback(async () => {
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
