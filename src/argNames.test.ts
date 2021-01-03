/* eslint-plugin-disable functional */

import { argNames } from './argNames';

describe('argNames', () => {
  it('should return functions argument', () => {
    function f1(a: number) {
      return a;
    }
    expect(argNames(f1)).toEqual(['a']);
  });

  it('should return functions arguments', () => {
    function f1(a: number, b: number) {
      return a + b;
    }
    expect(argNames(f1)).toEqual(['a', 'b']);
  });

  it('should return an arrow functions argument', () => {
    const f1 = (a: number) => a;
    expect(argNames(f1)).toEqual(['a']);
    expect(argNames((a: number) => a)).toEqual(['a']);
  });

  it('should return an arrow functions argument', () => {
    const f1 = (a: number, b: number) => a + b;
    expect(argNames(f1)).toEqual(['a', 'b']);
    expect(argNames((a: number, b: number) => a + b)).toEqual(['a', 'b']);
  });

  it('should return an empty array if function has no arguments', () => {
    const f1 = () => undefined;

    expect(argNames(f1)).toEqual([]);
    expect(argNames(() => undefined)).toEqual([]);
  });

  it('should return an empty array if no function supplied', () => {
    expect((argNames as any)()).toEqual([]);
  });
});
