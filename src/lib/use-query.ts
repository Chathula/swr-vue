import { Args } from '../types';

import { useBaseQuery } from './use-base-query';
import { getQueryArgs } from '../utils';

export function useQuery(...args: Args) {
  const [queryKey, variables, queryFn, config] = getQueryArgs(args);

  const query = useBaseQuery(queryKey, variables, queryFn, config);

  // handleSuspense(query);

  return query;
}
