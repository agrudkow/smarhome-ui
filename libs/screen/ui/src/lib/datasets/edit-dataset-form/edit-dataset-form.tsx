import React, { FC } from 'react';

import styled from 'styled-components';
import { BaseButton, TextField } from '@smarthome/common/ui';

export interface EditDatasetFormProps {
  name: string;
  summary: string;
  description: string;
  onSave?: () => void;
  onCancle?: () => void;
}

const StyledEditDatasetForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const CustomBaseButton = styled(BaseButton)<{ margintop?: number }>`
  width: 150px;

  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    width: 100%;
    margin-top: ${({ margintop }) => (margintop ? `${margintop}px` : '0')};
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    justify-content: flex-start;
    width: 100%;
  }
`;

const EditDatasetFromView: FC<EditDatasetFormProps> = ({
  description,
  name,
  summary,
  onSave: onSaveChanges,
  onCancle: onCancelChanges,
}) => {
  return (
    <StyledEditDatasetForm noValidate autoComplete="off">
      <FormContent>
        <TextField
          required
          id="input-name"
          label="Name"
          multiline
          defaultValue={name}
          variant="outlined"
        />
        <br />
        <TextField
          id="input-summary"
          label="Summary"
          multiline
          defaultValue={summary}
          variant="outlined"
        />
        <br />
        <TextField
          id="input-description"
          label="Description"
          multiline
          defaultValue={description}
          variant="outlined"
        />
      </FormContent>
      <Buttons>
        <CustomBaseButton onClick={onCancelChanges}>Cancel</CustomBaseButton>
        <CustomBaseButton margintop={15} onClick={onSaveChanges}>
          Save
        </CustomBaseButton>
      </Buttons>
    </StyledEditDatasetForm>
  );
};

export const EditDatasetFrom = EditDatasetFromView;
export default EditDatasetFrom;
