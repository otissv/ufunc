/* eslint-disable functional/no-expression-statement */
import { toFloat } from './toFloat';

describe('toFloat', () => {
  it('should return 1 if value is true ', () => {
    expect(toFloat()(true)).toBe(1);
  });

  it('should return 0 if value is false ', () => {
    expect(toFloat()(false)).toBe(0);
  });

  it('should return float if string value is a number', () => {
    expect(toFloat()('0')).toBe(0);
    expect(toFloat()('10')).toBe(10);
  });

  it('should return float if value is a number', () => {
    expect(toFloat()(0)).toBe(0);
    expect(toFloat()(10)).toBe(10);
  });

  it('should return custom none', () => {
    expect(toFloat('not a number')(null)).toBe('not a number');
    expect(toFloat('not a number')('true')).toBe('not a number');
    expect((toFloat as any)('not a number')()).toBe('not a number');
  });
});
