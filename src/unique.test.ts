/* eslint-plugin-disable functional */

import { unique } from './unique';

describe('unique', () => {
  it('should return unique items', () => {
    expect(unique([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
    expect(unique(['1', '1', '2', '2', '3'])).toEqual(['1', '2', '3']);
    expect(unique([true, false, true, true])).toEqual([true, false]);
  });
});
