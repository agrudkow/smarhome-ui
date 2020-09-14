import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { CustomerRoutes } from '@smarthome/common/service';
import EditAlgorithmFrom from './edit-alorithm';

export interface AddAlgorithmProps {
  onCancle: () => void;
}

const StyledAddAlgorithm = styled.div`
  margin: 15px;
  width: 100%;
`;

export const AddAlgorithm: FC<AddAlgorithmProps> = ({ onCancle }) => {
  const history = useHistory();

  const handleAddAlgorithm = useCallback(() => {
    history.push(`${CustomerRoutes.Algorithms}/${encodeURIComponent(2)}`);
  }, [history]);
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
