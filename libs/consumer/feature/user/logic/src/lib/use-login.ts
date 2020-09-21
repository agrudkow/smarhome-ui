import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { UserSlice } from '@smarthome/consumer/feature/user/state';
import { SnackbarSlice } from '@smarthome/common/state';

export function useLogin() {
  const dispatch = useDispatch();

  const handleLogin = useCallback(
    (token: string) => {
      dispatch(UserSlice.login(token));
    },
    [dispatch]
  );

  const handleLoginFailure = useCallback(
    (error) => {
      dispatch(
        SnackbarSlice.pushMessage({
          message: error?.message ?? JSON.stringify(error),
          variant: 'error',
        })
      );
    },
    [dispatch]
  );

  return {
    handleLogin,
    handleLoginFailure,
  } as const;
}
