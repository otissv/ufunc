/* eslint-disable functional/no-expression-statement */
import { mod } from './mod';

describe('mod', () => {
  it('should add to numbers together', () => {
    expect(mod(9)(5)).toBe(4);
  });
});
