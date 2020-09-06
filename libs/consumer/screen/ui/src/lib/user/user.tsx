import React, { FC, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import {
  InfoHeader,
  UnderlinedContainer,
  OvalBoxContainer,
} from '@smarthome/common/ui';
import UserInfoForm from './user-info-form';
import { User as IUser } from '@smarthome/consumer/screen/logic';
import { fetchUserDetails } from '@smarthome/consumer/screen/service';

const StyledUser = styled.div``;

export const User: FC = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUser | undefined>(undefined);

  const handleToggleEditView = useCallback(() => {
    setEdit((prevState) => !prevState);
  }, []);

  const handleSaveChanges = useCallback(() => {
    console.log('send data');
    setEdit((prevState) => !prevState);
  }, []);

  useEffect(() => {
    setUserData(fetchUserDetails());
  }, []);

  return (
    <StyledUser>
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
        </>
      )}
    </StyledUser>
  );
};

export default User;
