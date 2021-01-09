/* eslint-disable functional/no-expression-statement */
import { range } from './range';

describe('range', () => {
  it('should', () => {
    expect(range()(0)(3)).toEqual([0, 1, 2, 3]);
    expect(range()(3)(-1)).toEqual([3, 2, 1, 0, -1]);
    expect(range(() => (n: number) => n + 1)(0)(3)).toEqual([0, 1, 2, 3]);
    expect(range(() => (n: number) => n - 1)(-1)(-4)).toEqual([-1, -2, -3, -4]);
  });
});
