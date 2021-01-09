/* eslint-plugin-disable functional */
/* eslint-plugin-disable functional */

import { eitherPromise } from './eitherPromise';

describe('eitherPromise', () => {
  it('should return Right if true', async () => {
    const None = Promise.resolve('none');
    const Some = Promise.resolve('some');
    expect(await eitherPromise(None)(Some)(true)).toBe('some');
    expect(await eitherPromise(() => None)(() => Some)(true)).toBe('some');
    expect(await eitherPromise(() => None)(Some)(true)).toBe('some');
    expect(await eitherPromise(None)(() => Some)(true)).toBe('some');
  });

  it('should return Right if true', async () => {
    const None = Promise.resolve('none');
    const Some = Promise.resolve('some');
    expect(await eitherPromise(None)(Some)(false)).toBe('none');
    expect(await eitherPromise(() => None)(() => Some)(false)).toBe('none');
    expect(await eitherPromise(() => None)(Some)(false)).toBe('none');
    expect(await eitherPromise(None)(() => Some)(false)).toBe('none');
  });
});
