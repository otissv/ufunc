/* eslint-plugin-disable functional */

import { take } from './take';

describe('take', () => {
  it('should take max of n items from list beginning of the list', () => {
    expect(take(4)([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4]);
    expect(take(4)([1, 2])).toEqual([1, 2]);
    expect(take(4)([])).toEqual([]);
  });

  it('should return empty array if list is empty', () => {
    expect((take as any)(4)(true)).toEqual([]);
  });
});
