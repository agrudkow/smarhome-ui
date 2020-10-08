import { useSelector, useDispatch } from 'react-redux';
import { DeepReadonly } from 'utility-types';
import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { SnackbarSlice } from '@smarthome/common/state';

/**
 * @function useLoading - custom hook which handles snackbar state (has to be used with state slice SnackbarSlice attached to global store) and displays messages from state in snackbar.
 */
export function useSncakbarSubscriber<
  K extends { readonly snackbar: DeepReadonly<SnackbarSlice.SnackbarState> }
>() {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { messages } = useSelector((state: K) => state.snackbar);

  useEffect(() => {
    if (messages.length) {
      const { message, variant } = messages[0];
      enqueueSnackbar(message, { variant });
      dispatch(SnackbarSlice.popMessage());
    }
  }, [dispatch, enqueueSnackbar, messages]);
}
