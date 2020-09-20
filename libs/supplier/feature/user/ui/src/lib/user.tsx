import React, { FC } from 'react';
import {
  InfoHeader,
  UnderlinedContainer,
  OvalBoxContainer,
  OutlinedButton,
} from '@smarthome/common/ui';
import UserInfoForm from './user-info-form';
import { useUser } from '@smarthome/supplier/feature/user/logic';

export const User: FC = () => {
  const {
    edit,
    userDetails,
    handleLogout,
    handleSaveChanges,
    handleToggleEditView,
    errorColor,
  } = useUser();

  return (
    <>
      {userDetails && (
        <>
          <InfoHeader
            headerText={'User'}
            infoMessageText={
              'This view allows you to view you account information and edit them'
            }
          />
          <UnderlinedContainer />
          <OvalBoxContainer>
            <UserInfoForm
              firstName={userDetails.firstName}
              lastName={userDetails.lastName}
              email={userDetails.email}
              phone={userDetails.phone}
              edit={edit}
              onEditToggle={handleToggleEditView}
              onSaveChanges={handleSaveChanges}
            />
          </OvalBoxContainer>
          {!edit && (
            <OutlinedButton
              onClick={handleLogout}
              customColor={errorColor}
              customBorderColor={errorColor}
            >
              Logout
            </OutlinedButton>
          )}
        </>
      )}
    </>
  );
};

export default User;
