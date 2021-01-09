/* eslint-disable functional/no-expression-statement */
import { resolve } from './resolve';

describe('resolve', () => {
  it('should resolve value', async () => {
    expect(await resolve('hello')).toBe('hello');
  });
});
