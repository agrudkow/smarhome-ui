import React from 'react';
import { BaseDataset } from './dataset.interface';
import { CellContainer, BaseButton } from '@smarthome/common/ui';
import { DatasetDTO } from '@smarthome/data';

export const datasetsDataParser: (
  data: DatasetDTO[],
  rowButtonText: string,
  rowButtonHandlerFactory: (datasetId: string) => () => void
) => BaseDataset[] = (data, rowButtonText, rowButtonHandlerFactory) => {
  return data.map(({ datasetId, displayName, datasetSummary }) => {
    return {
      name: <CellContainer>{displayName}</CellContainer>,
      briefDescription: <CellContainer>{datasetSummary}</CellContainer>,
      button: (
        <BaseButton
          onClick={rowButtonHandlerFactory(datasetId)}
          style={{
            width: '70px',
            height: '25px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
          }}
        >
          {rowButtonText}
        </BaseButton>
      ),
    };
  });
};
