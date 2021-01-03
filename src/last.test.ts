/* eslint-plugin-disable functional */

import { last } from './last';

describe('first', () => {
  it('should return first item in a list', async () => {
    expect(last([1, 2, 3, 4])).toEqual(4);
  });

  it('should return empty array if list is empty', async () => {
    expect(last([])).toEqual(undefined);
    expect((last as any)()).toEqual(undefined);
  });
});
