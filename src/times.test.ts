/* eslint-plugin-disable functional */

import { times } from './times';

describe('takeEnd', () => {
  it('should return ', () => {
    expect(
      times((i: number) => ({
        id: i,
      }))(4),
    ).toEqual([{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]);
    expect(times((i: number) => i)(4)).toEqual([0, 1, 2, 3]);
    expect(times((i: number) => i + 1)(4)).toEqual([1, 2, 3, 4]);
  });

  it('should return empty array ', () => {
    expect((times as any)((i: number) => i + 1)(null)).toEqual([]);
    expect((times as any)()(4)).toEqual([]);
  });
});
