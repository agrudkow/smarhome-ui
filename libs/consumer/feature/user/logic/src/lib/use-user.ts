import { useState, useContext, useCallback, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@smarthome/consumer/store';
import {
  UserSlice,
  UpdateUserSlice,
} from '@smarthome/consumer/feature/user/state';
import { UserDTO } from '@smarthome/data';

export function useUser() {
  const date = Date.now();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState<UserDTO>();
  const [edit, setEdit] = useState<boolean>(false);
  const {
    palette: { error: errorColor },
  } = useContext(ThemeContext);

  const { user, idToken, expiresAt } = useSelector(
    (state: RootState) => state.user
  );

  const isLoggedIn = idToken !== null && (expiresAt ?? 0) > date;

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
    idToken,
    isLoggedIn,
    expiresAt,
    edit,
    errorColor,
  } as const;
}
