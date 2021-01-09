/* eslint-plugin-disable functional */

import { takeEnd } from './takeEnd';

describe('takeEnd', () => {
  it('should return take at least n items from end of list', () => {
    expect(takeEnd(4)([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([6, 7, 8, 9]);
    expect(takeEnd(4)([1, 2])).toEqual([1, 2]);
    expect(takeEnd(4)([])).toEqual([]);
  });

  it('should return empty array if list is empty', () => {
    expect((takeEnd as any)(4)(true)).toEqual([]);
  });
});
