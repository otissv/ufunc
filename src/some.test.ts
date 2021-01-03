/* eslint-plugin-disable functional */

import { someTrue } from './someTrue';

describe('everyTrue', () => {
  it('should return true if one or more items are truthy', () => {
    expect(someTrue([false, true])).toBe(true);
    expect(someTrue([false, 'a', 1, true])).toBe(true);
  });

  it('should return false if any items are falsy', () => {
    expect(someTrue([null, 0, false])).toBe(false);
    expect(someTrue([])).toBe(false);
  });
});
