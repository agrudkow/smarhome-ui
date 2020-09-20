import { useState, useContext, useCallback, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@smarthome/supplier/store';
import {
  UserSlice,
  UpdateUserSlice,
} from '@smarthome/supplier/feature/user/state';
import { UserDTO } from '@smarthome/data';

export function useUser() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState<UserDTO>();
  const [edit, setEdit] = useState<boolean>(false);
  const {
    palette: { error: errorColor },
  } = useContext(ThemeContext);

  const { user } = useSelector((state: RootState) => state.user);

  const handleToggleEditView = useCallback(() => {
    setEdit((prevState) => !prevState);
  }, []);

  const handleSaveChanges = useCallback(() => {
    if (user) {
      dispatch(UpdateUserSlice.updateUserStart(user));
      setEdit(false);
    }
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(UserSlice.fetchUserStart());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  return {
    handleToggleEditView,
    handleSaveChanges,
    userDetails: userData,
    edit,
    errorColor,
  } as const;
}
