import { useUid } from '../utils';

export function useBaseQuery(
  queryKey: string,
  variables: any[],
  queryFn: Promise<any>,
  config: object = {}
) {
  console.log(queryKey, variables, queryFn, config);

  const instanceId = useUid();
  const instanceId2 = useUid();

  console.log(instanceId, instanceId2);
}
