/* eslint-plugin-disable functional */

import { option } from './option';

describe('option', () => {
  it('should return Some if true', () => {
    const None = 'none';
    const Some = 'some';
    expect(option(None)(Some)).toBe(Some);
    expect(option(() => None)(() => Some)).toBe(Some);
    expect(option(() => None)(Some)).toBe(Some);
    expect(option(None)(() => Some)).toBe(Some);
  });

  it('should return None if false', () => {
    const None = 'none';
    const Some = null;
    expect(option(None)(Some)).toBe(None);
    expect(option(() => None)(() => Some)).toBe(None);
    expect(option(() => None)(Some)).toBe(None);
    expect(option(None)(() => Some)).toBe(None);
  });
});
