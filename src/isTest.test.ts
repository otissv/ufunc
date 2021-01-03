/* eslint-plugin-disable functional */

import { isTest } from './isTest';

describe('isTest', () => {
  afterEach(() => {
    process.env.NODE_ENV = 'dev';
  });
  it('should return true if NODE_ENV environment variable is test', () => {
    process.env.NODE_ENV = 'test';
    expect(isTest()).toBe(true);
  });

  it('should return false if NODE_ENV environment variable is not test', () => {
    process.env.NODE_ENV = 'dev';

    expect(isTest()).toBe(false);
  });
});
