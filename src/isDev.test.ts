/* eslint-plugin-disable functional */

import { isDev } from './isDev';

describe('isDev', () => {
  afterEach(() => {
    process.env.NODE_ENV = 'test';
  });
  it('should return true if NODE_ENV environment variable is development', () => {
    process.env.NODE_ENV = 'development';
    expect(isDev()).toBe(true);
  });

  it('should return true if NODE_ENV environment variable is dev', () => {
    process.env.NODE_ENV = 'dev';
    expect(isDev()).toBe(true);
  });

  it('should return false if NODE_ENV environment variable is not development', () => {
    process.env.NODE_ENV = 'test';

    expect(isDev()).toBe(false);
  });
});
