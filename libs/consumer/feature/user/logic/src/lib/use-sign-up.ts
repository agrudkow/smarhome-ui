import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { UserSlice } from '@smarthome/consumer/feature/user/state';
import { SignUpProps } from '@smarthome/consumer/feature/user/service';
import { SnackbarSlice } from '@smarthome/common/state';

export function useSignUp() {
  const dispatch = useDispatch();

  const handleSignUp = useCallback(
    (data: SignUpProps) => {
      dispatch(UserSlice.signUpStart(data));
    },
    [dispatch]
  );

  const handleSignUpFailure = useCallback(
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
    handleSignUp,
    handleSignUpFailure,
  } as const;
}
