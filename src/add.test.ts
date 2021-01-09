/* eslint-plugin-disable functional */
import { add } from './add';

describe('add', () => {
  it('should', () => {
    expect(add('test')('2')).toBe('test2');
    expect(add(1)(1)).toBe(2);
    expect((add as any)(11)('11')).toBe('1111');
  });
});
