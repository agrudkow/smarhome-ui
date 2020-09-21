import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { UserSlice } from '@smarthome/consumer/feature/user/state';
import { SnackbarSlice } from '@smarthome/common/state';

export function useLogout() {
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(UserSlice.logout());
  }, [dispatch]);

  const handleLogoutFailure = useCallback(() => {
    dispatch(
      SnackbarSlice.pushMessage({ message: 'Logout error.', variant: 'error' })
    );
  }, [dispatch]);

  return {
    handleLogout,
    handleLogoutFailure,
  } as const;
}
