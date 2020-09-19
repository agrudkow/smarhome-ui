import React from 'react';
import { BaseDataset } from './dataset.interface';
import { CellContainer, BaseButton } from '@smarthome/common/ui';
import { DatasetDTO } from '@smarthome/data';
import { TableDataParser } from '@smarthome/common/logic';
import { DeepReadonly } from 'utility-types';

export const datasetsDataParser: TableDataParser<
  BaseDataset,
  DeepReadonly<Array<DatasetDTO>>
> = (data, rowButtonText, rowButtonHandlerFactory) =>
  data.map(({ datasetId, displayName, datasetSummary }) => ({
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
  }));
