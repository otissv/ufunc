/* eslint-plugin-disable functional */

import { head } from './head';

describe('head', () => {
  it('should return first item in a list', async () => {
    expect(head([1, 2, 3, 4])).toEqual([1]);
  });

  it('should return empty array if list is empty', async () => {
    expect(head([])).toEqual([]);
    expect((head as any)()).toEqual([]);
  });
});
