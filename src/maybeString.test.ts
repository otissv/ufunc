/* eslint-plugin-disable functional */
import { maybeString } from './maybeString';

describe('maybeString', () => {
  it('should return value if value is of type string', () => {
    expect(maybeString('hello')).toBe('hello');
    expect(maybeString('')).toBe('');
  });

  it('should return empty value if value is of type is not string', () => {
    expect((maybeString as any)(true)).toBe('');
  });
});
