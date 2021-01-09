/* eslint-disable functional/no-expression-statement */
import { EQ, LT, GT } from './types';
import { bound } from './bound';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const digits = [1, 2, 3, 4];

describe('bound', () => {
  it('should return true if a is equal to b', () => {
    expect(bound(days)('Monday')('Monday')).toBe(EQ);
    expect(bound(digits)(1)(1)).toBe(EQ);
  });

  it('should return true if a is less than', () => {
    expect(bound(days)('Monday')('Sunday')).toBe(LT);
    expect(bound(digits)(1)(2)).toBe(LT);
  });

  it('should return true if a is greater than', () => {
    expect(bound(days)('Friday')('Monday')).toBe(GT);
    expect(bound(digits)(4)(1)).toBe(GT);
  });

  it('should throw error values are not in the list', () => {
    expect(bound(days)('hello')('Monday')).toBeInstanceOf(Error);
    expect((bound(days)('hello')('Monday') as Error).message).toBe(
      'hello is not a value in list',
    );
    expect(bound(digits)(0)(1)).toBeInstanceOf(Error);
    expect((bound(digits)(0)(1) as Error).message).toBe(
      '0 is not a value in list',
    );
  });
});
