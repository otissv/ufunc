/* eslint-plugin-disable functional */

import { maybe } from './maybe';

describe('maybe', () => {
  it('should return value if value is defined', () => {
    expect(maybe('empty')(true)).toBe(true);
    expect(maybe('empty')(() => 'hello')).toBe('hello');
    expect(maybe(() => 'empty')('hello')).toBe('hello');
    expect(maybe(() => 'empty')(() => 'hello')).toBe('hello');
  });

  it('should return none if value is undefined', () => {
    expect(maybe('none')(undefined)).toBe('none');
    expect(maybe('none')(() => undefined)).toBe('none');
    expect(maybe(() => 'none')(undefined)).toBe('none');
    expect(maybe('none')(() => undefined)).toBe('none');
  });
});
