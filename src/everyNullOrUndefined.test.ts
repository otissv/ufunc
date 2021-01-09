/* eslint-plugin-disable functional */

import { everyNullOrUndefined } from './everyNullOrUndefined';

describe('everyNullOrUndefined tests', () => {
  it('should return true if all are null', () => {
    expect(everyNullOrUndefined([null, null])).toBe(true);
  });

  it('should return false one or more is not null', () => {
    expect(everyNullOrUndefined([true, null])).toBe(false);
  });
});
