import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import { EditDatasetFrom } from '../edit-dataset-form';
import { useHistory } from 'react-router-dom';
import { CustomerRoutes } from '@smarthome/common/service';

export interface AddDatasetProps {
  onCancle: () => void;
}

const StyledAddDataset = styled.div`
  margin: 15px;
  width: 100%;
`;

export const AddDataset: FC<AddDatasetProps> = ({ onCancle }) => {
  const history = useHistory();

  const handleAddDataset = useCallback(() => {
    history.push(`${CustomerRoutes.Datasets}/${encodeURIComponent(2)}`);
  }, [history]);
  return (
    <StyledAddDataset>
      <EditDatasetFrom
        name=""
        summary=""
        description=""
        onCancle={onCancle}
        onSave={handleAddDataset}
      />
    </StyledAddDataset>
  );
};

export default AddDataset;
