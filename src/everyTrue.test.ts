/* eslint-plugin-disable functional */

import { everyTrue } from './everyTrue';

describe('everyTrue', () => {
  it('should return true if all items are truthy', () => {
    expect(everyTrue(['a', 1, true])).toEqual(true);
  });

  it('should return false if any items are falsy', () => {
    expect(everyTrue(['a', 1, true, false])).toEqual(false);
    expect(everyTrue([])).toEqual(false);
  });
});
