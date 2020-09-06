import React from 'react';
import { CellContainer, BaseButton } from '@smarthome/common/ui';
import { ExecutionBilling } from './billing.interface';
import { ExecutionBillingDTO } from '@smarthome/data';
import { TableDataParser } from '@smarthome/common/logic';

export const executionsBillingDataParser: TableDataParser<
  ExecutionBilling,
  ExecutionBillingDTO,
  (resultsetId: string) => () => void
> = (data, rowButtonText, rowButtonHandlerFactory) =>
  data.map(
    ({
      resultsetId,
      datasetDisplayName,
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
          onClick={rowButtonHandlerFactory(resultsetId)}
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
