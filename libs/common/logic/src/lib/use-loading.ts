import { useSelector } from 'react-redux';
import { LoadingSlice } from '@smarthome/common/state';
import { DeepReadonly } from 'utility-types';

export function useLoading<
  K extends { readonly loadings: DeepReadonly<LoadingSlice.LoadingState> }
>() {
  const { loadings } = useSelector((state: K) => state.loadings);
  const loading = loadings > 0;
  return { loading } as const;
}
