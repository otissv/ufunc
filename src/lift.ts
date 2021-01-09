/**
 * Composes two function into another
 *
 * @param F - Outer function.
 * @param G - Inner function.
 * @param H - Returned inner function.
 * @param X - Value.
 *
 * @returns Returns the result of f(g(x))(h(x)
 *
 * @usage
 * `import { lift } from "ufunc/lift"`
 *
 * @example
 * ````
 * type Person = {
 *   readonly firstName: string;
 *   readonly lastName: string;
 * };
 * const person: Person = {
 *   firstName: 'Otis',
 *   lastName: 'Virginie',
 * };
 * const firstName = (p: Person) => p.firstName;
 * const lastName = (p: Person) => p.lastName;
 *
 * const compliment = (first: string) => (last: string) =>
 *   `Why hello, ${first} ${last}. You look most fetching today.`;
 *
 * lift(compliment)(firstName)(lastName)(person)
 * // "Why hello, Otis Virginie. You look most fetching today."
 * ``
 */
export const lift = <F extends Function>(f: F) => <G extends Function>(
  g: G,
) => <H extends Function>(h: H) => <X, To>(x: X): To => f(g(x))(h(x));
