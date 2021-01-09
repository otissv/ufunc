/* eslint-disable functional/no-expression-statement */
import { fmap } from './fmap';

describe('fmap', () => {
  it('should map a function over a container', () => {
    const outerFn = ({ name }: Record<string, any>) => ({ name });
    const innerFn = (person: Record<string, any>) => ({
      name: person.name.toUpperCase(),
    });

    expect(fmap(outerFn)(innerFn)({ name: 'Sam Wilson' })).toEqual({
      name: 'SAM WILSON',
    });
  });
});
