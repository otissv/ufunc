//TODO: use recursion to work with methods
export const cloneDeepWithFn = <Value>(obj: Value): Value =>
  JSON.parse(JSON.stringify(obj)) as Value;
