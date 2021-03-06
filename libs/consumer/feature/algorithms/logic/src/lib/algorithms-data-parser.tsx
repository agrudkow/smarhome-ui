import React from 'react';
import { BaseAlgorithm } from './algorithm.interface';
import { CellContainer, BaseButton, CustomRating } from '@smarthome/common/ui';
import { AlgorithmDTO } from '@smarthome/data';
import { TableDataParser } from '@smarthome/common/logic';
import { DeepReadonly } from 'utility-types';

export const algorithmsDataParser: TableDataParser<
  BaseAlgorithm,
  DeepReadonly<Array<AlgorithmDTO>>
> = (data, rowButtonText, rowButtonHandlerFactory) => {
  return data.map(
    ({ algorithmId, algorithmSummary, displayName, algorithmRating }) => {
      return {
        name: <CellContainer>{displayName}</CellContainer>,
        briefDescription: <CellContainer>{algorithmSummary}</CellContainer>,
        rating: (
          <CellContainer>
            <CustomRating
              name="rating-component"
              value={algorithmRating}
              precision={0.5}
              readOnly={true}
            />
          </CellContainer>
        ),
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
