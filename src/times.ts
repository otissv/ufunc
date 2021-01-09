export function times<F extends Function>(fn: F): any {
  function reducer(n: number, acc: any = []): any {
    if (typeof fn !== 'function' || typeof n !== 'number') {
      return [];
    } else {
      return n === 0 ? acc : reducer(n - 1, [...acc, ...[fn(acc.length, acc)]]);
    }
  }

  return (n: number) => reducer(n);
}
