import React, { FC } from 'react';
import styled from 'styled-components';
import { TextField, BaseButton } from '@smarthome/common/ui';

export interface UserInfoFormProps {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  onEditToggle: () => void;
  onSaveChanges: () => void;
  edit: boolean;
}

const StyledUserInfoForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 15px;
  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    justify-content: flex-start;
    width: 100%;
  }
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

const CustomTextField = styled(TextField)`
  & .MuiInputBase-root.Mui-disabled {
    color: inherit;
  }

  .MuiFormLabel-root.Mui-disabled {
    color: inherit;
  }
`;

export const UserInfoForm: FC<UserInfoFormProps> = ({
  email,
  firstName,
  lastName,
  phone,
  onEditToggle,
  onSaveChanges,
  edit,
}) => {
  return (
    <StyledUserInfoForm>
      <FormContent>
        <CustomTextField
          id="input-email"
          label="Email"
          defaultValue={email}
          variant="outlined"
          helperText={edit ? 'Email is not editable' : ''}
          disabled
        />
        <br />
        <CustomTextField
          required={edit}
          id="input-first-name"
          label="First name"
          defaultValue={firstName}
          variant="outlined"
          disabled={!edit}
        />
        <br />
        <CustomTextField
          required={edit}
          id="input-last-name"
          label="Last name"
          defaultValue={lastName}
          variant="outlined"
          disabled={!edit}
        />
        <br />
        <CustomTextField
          required={edit}
          id="input-phone"
          label="Phone"
          defaultValue={phone}
          variant="outlined"
          disabled={!edit}
        />
      </FormContent>
      <Buttons>
        {edit ? (
          <>
            <CustomBaseButton onClick={onEditToggle}>Cancel</CustomBaseButton>
            <CustomBaseButton margintop={15} onClick={onSaveChanges}>
              Save
            </CustomBaseButton>
          </>
        ) : (
          <CustomBaseButton margintop={15} onClick={onEditToggle}>
            Edit
          </CustomBaseButton>
        )}
      </Buttons>
    </StyledUserInfoForm>
  );
};

export default UserInfoForm;
