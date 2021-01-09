/* eslint-disable functional/no-expression-statement */
import { withNonBehavioral } from './withNonBehavioral';

describe('withNonBehavioral', () => {
  it('should call nonBehaviorals with arguments', () => {
    const args = 'nonBehavioralArg';
    const nonBehavioralFn1 = jest.fn();
    const nonBehavioralFn2 = jest.fn();

    withNonBehavioral(jest.fn())(nonBehavioralFn1)(args);
    expect(nonBehavioralFn1).toHaveBeenCalledTimes(1);
    expect(nonBehavioralFn1).toHaveBeenCalledWith(nonBehavioralFn1.name, args);

    withNonBehavioral(jest.fn())(nonBehavioralFn2)(args);
    expect(nonBehavioralFn2).toHaveBeenCalledTimes(1);
    expect(nonBehavioralFn2).toHaveBeenCalledWith(nonBehavioralFn2.name, args);
  });

  it('should call main with arguments', () => {
    const args = 'nonBehavioralArg';
    const fn = jest.fn();

    withNonBehavioral(fn)()(args);
    expect(fn).toHaveBeenCalledWith(args);
  });
});
