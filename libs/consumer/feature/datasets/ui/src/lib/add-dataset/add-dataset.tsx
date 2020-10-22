import React, { FC } from 'react';
import styled from 'styled-components';
import { EditDatasetFrom } from '../edit-dataset-form';
import { useAddDataset } from '@smarthome/consumer/feature/datasets/logic';

export interface AddDatasetProps {
  onCancle: () => void;
}

const StyledAddDataset = styled.div`
  margin: 15px;
  width: 100%;
`;

export const AddDataset: FC<AddDatasetProps> = ({ onCancle }) => {
  const {
    datasetData: { displayName, datasetSummary, datasetDescription },
    handleAddDataset,
  } = useAddDataset();

  return (
    <StyledAddDataset>
      <EditDatasetFrom
        name={displayName}
        summary={datasetSummary}
        description={datasetDescription}
        onCancle={onCancle}
        onSave={handleAddDataset}
      />
    </StyledAddDataset>
  );
};

export default AddDataset;
