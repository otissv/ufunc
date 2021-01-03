export const person = {
  firstName: 'Agent',
  lastName: 'Smith',
};

export const myName = person.firstName;

export const myName2 = person['firstName'];

export const myName3 = {
  firstName: 'Agent',
  lastName: 'Smith',
}['firstName'];
