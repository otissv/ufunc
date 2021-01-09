/* eslint-plugin-disable functional */

import { tail } from './tail';

describe('tail', () => {
  it('should return tail of a list', () => {
    expect(tail([1, 2, 3, 4])).toEqual([2, 3, 4]);
    expect(tail([])).toEqual([]);
  });

  it('should return empty array it not a list', () => {
    expect((tail as any)(true)).toEqual([]);
  });
});
