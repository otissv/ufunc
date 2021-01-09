/* eslint-disable functional/no-expression-statement */
import { lift } from './lift';

describe('lift', () => {
  it('should compose functions', () => {
    type Person = {
      readonly firstName: string;
      readonly lastName: string;
    };
    const person: Person = {
      firstName: 'Otis',
      lastName: 'Virginie',
    };
    const firstName = (p: Person) => p.firstName;
    const lastName = (p: Person) => p.lastName;

    const compliment = (first: string) => (last: string) =>
      `Why hello, ${first} ${last}. You look most fetching today.`;

    expect(lift(compliment)(firstName)(lastName)(person)).toBe(
      `Why hello, ${person.firstName} ${person.lastName}. You look most fetching today.`,
    );
  });
});
