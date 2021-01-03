// const P1 = Promise.resolve(1);
// const P2 = Promise.resolve(2);
// const P3 = Promise.resolve(3);

export async function promiseAll<I>(
  ...promises: readonly Promise<I>[]
): Promise<readonly I[] | Error> {
  return await Promise.all(promises.map(async (p) => await p)).catch((e) => {
    const error = e instanceof Error ? e : new Error(e);
    return Promise.reject(error);
  });
}

// all(P1, P2, P3)
//   .then(console.log)
//   .catch(e => e instanceof Error);
