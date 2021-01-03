/* eslint-plugin-disable functional */

import { first } from './first';

describe('first', () => {
  it('should return first item in a list', async () => {
    expect(first([1, 2, 3, 4])).toEqual(1);
  });

  it('should return empty array if list is empty', async () => {
    expect(first([])).toEqual(undefined);
    expect((first as any)()).toEqual(undefined);
  });
});
