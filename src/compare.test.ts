/* eslint-disable functional/no-expression-statement */
import { compare } from './compare';
import { EQ, NOT_EQ, LT, GT, LT_EQ, GT_EQ } from './types';

describe('compare', () => {
  it('should evaluate NOT_EQ correctly', () => {
    expect(compare(NOT_EQ)('a')('b')).toBe(true);
    expect(compare(NOT_EQ)(1)(2)).toBe(true);
    expect(compare(NOT_EQ)(true)(false)).toBe(true);

    expect(compare(NOT_EQ)('a')('a')).toBe(false);
    expect(compare(NOT_EQ)(1)(1)).toBe(false);
    expect(compare(NOT_EQ)(true)(true)).toBe(false);
    expect(compare(NOT_EQ)(false)(false)).toBe(false);
  });

  it('should evaluate EQ correctly', () => {
    expect(compare(EQ)('a')('a')).toBe(true);
    expect(compare(EQ)(1)(1)).toBe(true);
    expect(compare(EQ)(true)(true)).toBe(true);
    expect(compare(EQ)(false)(false)).toBe(true);

    expect(compare(EQ)('a')('b')).toBe(false);
    expect(compare(EQ)(1)(2)).toBe(false);
    expect(compare(EQ)(true)(false)).toBe(false);
  });

  it('should evaluate LT correctly', () => {
    expect(compare(LT)('a')('b')).toBe(true);
    expect(compare(LT)(1)(2)).toBe(true);
    expect(compare(LT)(false)(true)).toBe(true);

    expect(compare(LT)('b')('a')).toBe(false);
    expect(compare(LT)(2)(1)).toBe(false);
    expect(compare(LT)(true)(false)).toBe(false);

    expect(compare(LT)('a')('a')).toBe(false);
    expect(compare(LT)(1)(1)).toBe(false);
    expect(compare(LT)(true)(true)).toBe(false);
  });

  it('should evaluate LT_EQ correctly', () => {
    expect(compare(LT_EQ)('a')('b')).toBe(true);
    expect(compare(LT_EQ)(1)(2)).toBe(true);
    expect(compare(LT_EQ)(false)(true)).toBe(true);

    expect(compare(LT_EQ)('b')('a')).toBe(false);
    expect(compare(LT_EQ)(2)(1)).toBe(false);
    expect(compare(LT_EQ)(true)(false)).toBe(false);

    expect(compare(LT_EQ)('a')('a')).toBe(true);
    expect(compare(LT_EQ)(1)(1)).toBe(true);
    expect(compare(LT_EQ)(true)(true)).toBe(true);
  });

  it('should evaluate GT correctly', () => {
    expect(compare(GT)('b')('a')).toBe(true);
    expect(compare(GT)(2)(1)).toBe(true);
    expect(compare(GT)(true)(false)).toBe(true);

    expect(compare(GT)('a')('b')).toBe(false);
    expect(compare(GT)(1)(2)).toBe(false);
    expect(compare(GT)(false)(true)).toBe(false);

    expect(compare(GT)('a')('a')).toBe(false);
    expect(compare(GT)(1)(1)).toBe(false);
    expect(compare(GT)(true)(true)).toBe(false);
  });

  it('should evaluate GT_EQ correctly', () => {
    expect(compare(GT_EQ)('b')('a')).toBe(true);
    expect(compare(GT_EQ)(2)(1)).toBe(true);
    expect(compare(GT_EQ)(true)(false)).toBe(true);

    expect(compare(GT_EQ)('a')('b')).toBe(false);
    expect(compare(GT_EQ)(1)(2)).toBe(false);
    expect(compare(GT_EQ)(false)(true)).toBe(false);

    expect(compare(GT_EQ)('a')('a')).toBe(true);
    expect(compare(GT_EQ)(1)(1)).toBe(true);
    expect(compare(GT_EQ)(true)(true)).toBe(true);
  });
});
