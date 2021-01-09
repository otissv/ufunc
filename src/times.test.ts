/* eslint-plugin-disable functional */

import { times } from './times';

describe('times', () => {
  it('should ', () => {
    expect(times((i: number) => i)(4)).toEqual([0, 1, 2, 3]);
    expect(times((i: number) => ({ _id: i }))(2)).toEqual([
      { _id: 0 },
      { _id: 1 },
    ]);
  });

  it('should return empty array ', () => {
    expect((times as any)((i: number) => i + 1)(null)).toEqual([]);
    expect((times as any)()(4)).toEqual([]);
  });
});
