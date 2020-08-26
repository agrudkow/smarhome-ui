import React from 'react';
// import Rating from '@material-ui/lab/Rating';
import { BaseAlgorithm } from './algorithm.interface';
import { CellContainer, BaseButton, Rating } from '@smarthome/common/ui';
import { AlgorithmDTO } from '@smarthome/data';

export const algorithmsDataParser: (
  data: AlgorithmDTO[],
  clickHandlerFactory: (id: string) => () => void
) => BaseAlgorithm[] = (data, clickHandlerFactory) => {
  return data.map(
    ({ algorithmId, algorithmSummary, displayName, algorithmRating }) => {
      return {
        name: <CellContainer>{displayName}</CellContainer>,
        briefDescription: <CellContainer>{algorithmSummary}</CellContainer>,
        rating: (
          <CellContainer>
            <Rating
              name="rating-component"
              value={algorithmRating}
              precision={0.5}
              readOnly={true}
            />
          </CellContainer>
        ),
        button: (
          <BaseButton
            onClick={clickHandlerFactory(algorithmId)}
            style={{
              width: '70px',
              height: '25px',
              fontSize: '12px',
              whiteSpace: 'nowrap',
            }}
          >
            More
          </BaseButton>
        ),
      };
    }
  );
};
