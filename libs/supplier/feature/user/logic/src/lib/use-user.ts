import { useState, useContext, useCallback, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@smarthome/supplier/store';
import {
  UserSlice,
  UpdateUserSlice,
} from '@smarthome/supplier/feature/user/state';
import { UserDTO } from '@smarthome/data';

export function useUser() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState<UserDTO>();
  const [edit, setEdit] = useState<boolean>(false);
  const {
    palette: { error: errorColor },
  } = useContext(ThemeContext);

  const { user } = useSelector((state: RootState) => state.user);
  const { finished, error: updateUserError } = useSelector(
    (state: RootState) => state.updateUser
  );

  const handleToggleEditView = useCallback(() => {
    setEdit((prevState) => !prevState);
  }, []);

  const handleSaveChanges = useCallback(() => {
    if (user) {
      dispatch(UpdateUserSlice.updateUserStart(user));
    }
  }, [dispatch, user]);

  const handleLogout = useCallback(() => {
    console.log('logout');
  }, []);

  useEffect(() => {
    dispatch(UserSlice.fetchUserStart());
  }, [dispatch]);

  useEffect(() => {
    if (finished && !updateUserError) {
      setEdit(false);
      enqueueSnackbar('User updated.', { variant: 'success' });
      dispatch(UpdateUserSlice.resetFinish());
      dispatch(UserSlice.fetchUserStart());
    }
  }, [dispatch, enqueueSnackbar, finished, updateUserError]);

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  return {
    handleToggleEditView,
    handleSaveChanges,
    handleLogout,
    userDetails: userData,
    edit,
    errorColor,
  } as const;
}
