import React, { FC } from 'react';
import styled from 'styled-components';
import EditAlgorithmFrom from './edit-alorithm';
import { useAddAlgorithm } from '@smarthome/supplier/feature/algorithms/logic';

export interface AddAlgorithmProps {
  onCancle: () => void;
}

const StyledAddAlgorithm = styled.div`
  margin: 15px;
  width: 100%;
`;

export const AddAlgorithm: FC<AddAlgorithmProps> = ({ onCancle }) => {
  const { handleAddAlgorithm } = useAddAlgorithm();

  return (
    <StyledAddAlgorithm>
      <EditAlgorithmFrom
        name=""
        summary=""
        description=""
        onCancle={onCancle}
        onSave={handleAddAlgorithm}
      />
    </StyledAddAlgorithm>
  );
};

export default AddAlgorithm;
