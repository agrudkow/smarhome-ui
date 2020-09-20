import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useUploadFile } from '@smarthome/common/logic';
import { UploadEntityProps } from '@smarthome/consumer/feature/datasets/service';
import { DatasetDetailsSlice } from '@smarthome/consumer/feature/datasets/state';

export function useUploadEntity() {
  const dispatch = useDispatch();
  const { id: datasetId } = useParams<{ id: string }>();

  const handleSendFileMain = useCallback(
    (file: File) => {
      const data: UploadEntityProps = { datasetId, file };
      dispatch(DatasetDetailsSlice.uploadEntityStart(data));
    },
    [datasetId, dispatch]
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
