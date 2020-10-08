import { useSelector } from 'react-redux';
import { LoadingSlice } from '@smarthome/common/state';
import { DeepReadonly } from 'utility-types';

/**
 * @function useLoading - custom hook which handles loading bar state (has to be used with state slice LoadingSlice attached to global store).
 *
 * @returns loading - state of loading bar.
 */
export function useLoading<
  K extends { readonly loadings: DeepReadonly<LoadingSlice.LoadingState> }
>() {
  const { loadings } = useSelector((state: K) => state.loadings);
  const loading = loadings > 0;
  return { loading } as const;
}
