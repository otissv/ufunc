//TODO: use recursion to work with methods
export function cloneDeepWithFn<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj)) as T;
}
