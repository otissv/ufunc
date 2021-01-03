/* eslint-plugin-disable functional */

import { isProduction } from './isProduction';

describe('identity', () => {
  afterEach(() => {
    process.env.NODE_ENV = 'test';
  });
  it('should return true if NODE_ENV environment variable is production', () => {
    process.env.NODE_ENV = 'production';
    expect(isProduction()).toBe(true);
  });

  it('should return true if NODE_ENV environment variable is prod', () => {
    process.env.NODE_ENV = 'prod';
    expect(isProduction()).toBe(true);
  });

  it('should return false if NODE_ENV environment variable is node production', () => {
    process.env.NODE_ENV = 'test';

    expect(isProduction()).toBe(false);
  });
});
