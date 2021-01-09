/* eslint-plugin-disable functional */

import { takeRight } from './takeRight';

describe('takeRight', () => {
  it('should take at max of n items from end of list', () => {
    expect(takeRight(4)([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([6, 7, 8, 9]);
    expect(takeRight(4)([1, 2])).toEqual([1, 2]);
    expect(takeRight(4)([])).toEqual([]);
  });

  it('should return empty array if list is empty', () => {
    expect((takeRight as any)(4)(true)).toEqual([]);
  });
});
