import React from 'react';
import { AlgorithmTopExec } from './algorithms-top.interface';
import { CellContainer, BaseButton } from '@smarthome/common/ui';
import { AlgorithmTopExecDTO } from '@smarthome/data';
import { TableDataParser } from '@smarthome/common/logic';

export const algorithmTopExecutionsDataParser: TableDataParser<
  AlgorithmTopExec,
  AlgorithmTopExecDTO
> = (data, rowButtonText, rowButtonHandlerFactory) => {
  return data.map(
    ({ algorithmId, algorithmSummary, displayName, algorithmExecutions }) => {
      return {
        name: <CellContainer>{displayName}</CellContainer>,
        briefDescription: <CellContainer>{algorithmSummary}</CellContainer>,
        executions: <CellContainer>{algorithmExecutions}</CellContainer>,
        button: (
          <BaseButton
            onClick={rowButtonHandlerFactory(algorithmId)}
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
    }
  );
};
