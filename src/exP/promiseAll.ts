// const P1 = Promise.resolve(1);
// const P2 = Promise.resolve(2);
// const P3 = Promise.resolve(3);

export const promiseAll = async <Value>(
  ...promises: readonly Promise<Value>[]
): Promise<readonly (Value | Error)[]> =>
  await Promise.all(promises.map(async (p) => await p)).catch((error) =>
    Promise.reject(error),
  );
