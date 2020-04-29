import { ref } from 'vue';
import { Args } from '../types';

let _uid = ref(0);

export function useUid() {
  _uid.value++;

  return _uid.value;
}

export function isObject(a: any) {
  return a && typeof a === 'object' && !Array.isArray(a);
}

export function getQueryArgs(args: Args) {
  if (isObject(args[0])) {
    if (
      args[0].hasOwnProperty('queryKey') &&
      args[0].hasOwnProperty('queryFn')
    ) {
      const { queryKey, variables = [], queryFn, config = {} } = args[0];
      return [queryKey, variables, queryFn, config];
    } else {
      throw new Error('queryKey and queryFn keys are required.');
    }
  }
  if (typeof args[2] === 'function') {
    const [queryKey, variables = [], queryFn, config = {}] = args;
    return [queryKey, variables, queryFn, config];
  }
  const [queryKey, queryFn, config = {}] = args;
  return [queryKey, [], queryFn, config];
}
