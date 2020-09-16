import { useSelector, useDispatch } from 'react-redux';
import { DeepReadonly } from 'utility-types';
import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { ErrorSlice } from '@smarthome/common/state';

export function useErrorSncakbar<
  K extends { readonly errors: DeepReadonly<ErrorSlice.ErrorState> }
>() {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { errors } = useSelector((state: K) => state.errors);
  useEffect(() => {
    if (errors.length) {
      enqueueSnackbar(errors[0], { variant: 'error' });
      dispatch(ErrorSlice.popError());
    }
  }, [dispatch, enqueueSnackbar, errors]);
}
