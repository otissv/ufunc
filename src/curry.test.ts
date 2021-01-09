/* eslint-plugin-disable functional */

import { curry } from './curry';

describe('curry', () => {
  it('should return ', () => {
    const sum4 = (a: number, b: number, c: number, d: number) => () =>
      a + b + c + d;

    const curriedSum4 = curry(sum4);
    const f = curriedSum4(1, 2);
    const g = f(3);
    const result = g(4)();
    expect(result).toBe(10);
  });
});
