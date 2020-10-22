import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useUploadFile } from '@smarthome/common/logic';
import { AlgorithmDetailsSlice } from '@smarthome/supplier/feature/algorithms/state';
import {
  EnhancedFile,
  UploadSourceCodeProps,
} from '@smarthome/supplier/feature/algorithms/service';

export function useUploadSourceCode(algorithmId: string) {
  const dispatch = useDispatch();

  const handleSendFileMain = useCallback(
    (file: File) => {
      const enhancedFile = file as EnhancedFile;
      enhancedFile.fileSize = file.size;
      enhancedFile.fileType = file.type;
      const data: UploadSourceCodeProps = { algorithmId, file: enhancedFile };
      dispatch(AlgorithmDetailsSlice.uploadSourceCodeStart(data));
    },
    [algorithmId, dispatch]
  );

  const {
    fileName,
    handleDeleteFile,
    handleSendFile,
    handleUploadFile,
  } = useUploadFile({
    onFileSend: handleSendFileMain,
  });

  return {
    fileName,
    handleDeleteFile,
    handleSendFile,
    handleUploadFile,
  } as const;
}
