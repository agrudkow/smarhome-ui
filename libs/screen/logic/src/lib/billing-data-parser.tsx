import React from 'react';
import { CellContainer, BaseButton } from '@smarthome/common/ui';
import { TableDataParser } from './data-parser.type';
import { ExecutionBilling } from './billing.interface';
import { ExecutionBillingDTO } from '@smarthome/data';

export const executionsBillingDataParser: TableDataParser<
  ExecutionBilling,
  ExecutionBillingDTO,
  (datasetId: string, algorithmId: string) => () => void
> = (data, rowButtonText, rowButtonHandlerFactory) =>
  data.map(
    ({
      datasetId,
      datasetDisplayName,
      algorithmId,
      algorithmDisplayName,
      billed,
      date,
    }) => ({
      datasetDisplayName: <CellContainer>{datasetDisplayName}</CellContainer>,
      algorithmDisplayName: (
        <CellContainer>{algorithmDisplayName}</CellContainer>
      ),
      billed: <CellContainer>{billed} PLN</CellContainer>,
      date: <CellContainer>{date}</CellContainer>,
      button: (
        <BaseButton
          onClick={rowButtonHandlerFactory(datasetId, algorithmId)}
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
    })
  );
