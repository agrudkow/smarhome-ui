import React, { FC } from 'react';
import { useGoogleLogout } from 'react-google-login';
import {
  InfoHeader,
  UnderlinedContainer,
  OvalBoxContainer,
  OutlinedButton,
} from '@smarthome/common/ui';
import UserInfoForm from './user-info-form';
import { useUser, useLogout } from '@smarthome/consumer/feature/user/logic';

export const User: FC = () => {
  const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

  const {
    edit,
    userDetails,
    handleSaveChanges,
    handleToggleEditView,
    errorColor,
  } = useUser();
  const { handleLogout, handleLogoutFailure } = useLogout();
  const { signOut } = useGoogleLogout({
    clientId: GOOGLE_CLIENT_ID ?? '',
    onLogoutSuccess: handleLogout,
    onFailure: handleLogoutFailure,
  });

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
              phone={userDetails.phone ?? '-'}
              edit={edit}
              onEditToggle={handleToggleEditView}
              onSaveChanges={handleSaveChanges}
            />
          </OvalBoxContainer>
          {!edit && (
            <OutlinedButton
              onClick={signOut}
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
