import React from 'react';
import { BaseAlgorithm } from './algorithm.interface';
import { CellContainer, BaseButton } from '@smarthome/common/ui';

export const algorithmsDataParser: (
  data: Omit<BaseAlgorithm, 'button'>[]
) => BaseAlgorithm[] = (data) => {
  return data.map(({ name, rating, briefDescription }) => {
    return {
      name: <CellContainer>{name}</CellContainer>,
      briefDescription: <CellContainer>{briefDescription}</CellContainer>,
      rating: rating,
      button: (
        <BaseButton
          onClick={() => console.log('Click me boiiii')}
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
  });
};
