import React, { FC, useState, useEffect, useCallback, useContext } from 'react';
import {
  InfoHeader,
  UnderlinedContainer,
  OvalBoxContainer,
  OutlinedButton,
} from '@smarthome/common/ui';
import UserInfoForm from './user-info-form';
import { User as IUser } from '@smarthome/consumer/feature/user/logic';
import { fetchUserDetails } from '@smarthome/consumer/feature/user/service';
import { ThemeContext } from 'styled-components';

export const User: FC = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUser | undefined>(undefined);

  const {
    palette: { error },
  } = useContext(ThemeContext);

  const handleToggleEditView = useCallback(() => {
    setEdit((prevState) => !prevState);
  }, []);

  const handleSaveChanges = useCallback(() => {
    console.log('send data');
    setEdit((prevState) => !prevState);
  }, []);

  const handleLogout = useCallback(() => {
    console.log('logout');
  }, []);

  useEffect(() => {
    (async () => setUserData(await fetchUserDetails()))();
  }, []);

  return (
    <>
      {userData && (
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
              firstName={userData.firstName}
              lastName={userData.lastName}
              email={userData.email}
              phone={userData.phone}
              edit={edit}
              onEditToggle={handleToggleEditView}
              onSaveChanges={handleSaveChanges}
            />
          </OvalBoxContainer>
          {!edit && (
            <OutlinedButton
              onClick={handleLogout}
              customColor={error}
              customBorderColor={error}
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
