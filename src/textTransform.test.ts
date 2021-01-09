/* eslint-plugin-disable functional */

import {
  charAt,
  dropChars,
  dropCharsRight,
  dropFirstChar,
  firstChar,
  joinCase,
  toCamel,
  toKebabCase,
  toLower,
  toLowerFirst,
  toPascalCase,
  toSnakeCase,
  toTitle,
  toUpper,
  toUpperFirst,
} from './textTransform';

describe('charAt', () => {
  it('should return nth character of string', () => {
    expect(charAt(0)('hello')).toBe('h');
    expect(charAt(1)('hello')).toBe('e');
    expect(charAt(4)('hello')).toBe('o');
    expect(charAt(0)('')).toBe('');
  });

  it('should return all characters if type is not of string', () => {
    expect((charAt as any)()('hello')).toBe('hello');
    expect((charAt as any)(null)('hello')).toBe('hello');
    expect((charAt as any)(true)('hello')).toBe('hello');
    expect((charAt as any)('a')('hello')).toBe('hello');

    expect((charAt as any)('a')()).toBe('');
    expect((charAt as any)('a')(null)).toBe('');
    expect((charAt as any)('a')(undefined)).toBe('');
    expect((charAt as any)('a')(1)).toBe('');
    expect((charAt as any)('a')([])).toBe('');
    expect((charAt as any)('a')({})).toBe('');
  });
});

describe('dropChars', () => {
  it('should drop n characters from beginning of string', () => {
    expect(dropChars(0)('hello')).toBe('ello');
    expect(dropChars(1)('hello')).toBe('llo');
    expect(dropChars(3)('hello')).toBe('o');
    expect(dropChars(0)('')).toBe('');
  });

  it('should return all characters if type is not of string', () => {
    expect((dropChars as any)()('hello')).toBe('hello');
    expect((dropChars as any)(null)('hello')).toBe('hello');
    expect((dropChars as any)(true)('hello')).toBe('hello');
    expect((dropChars as any)('a')('hello')).toBe('hello');
    expect((dropChars as any)(0)()).toBe('');
    expect((dropChars as any)(0)(null)).toBe('');
    expect((dropChars as any)(0)(undefined)).toBe('');
    expect((dropChars as any)(0)(1)).toBe('');
    expect((dropChars as any)(0)([])).toBe('');
    expect((dropChars as any)(0)({})).toBe('');
  });
});

describe('dropCharsRight', () => {
  it('should drop n characters from end of string', () => {
    expect(dropCharsRight(0)('hello')).toBe('hell');
    expect(dropCharsRight(1)('hello')).toBe('hel');
    expect(dropCharsRight(3)('hello')).toBe('h');
    expect(dropCharsRight(0)('')).toBe('');
  });

  it('should return all characters if type is not of string', () => {
    expect((dropCharsRight as any)()('hello')).toBe('hello');
    expect((dropCharsRight as any)(null)('hello')).toBe('hello');
    expect((dropCharsRight as any)(undefined)('hello')).toBe('hello');
    expect((dropCharsRight as any)(true)('hello')).toBe('hello');
    expect((dropCharsRight as any)('a')('hello')).toBe('hello');
    expect((dropCharsRight as any)(0)()).toBe('');
    expect((dropCharsRight as any)(1)(null)).toBe('');
    expect((dropCharsRight as any)(3)(true)).toBe('');
  });
});

describe('dropFirstChar', () => {
  it('should return drop the first characters in string', () => {
    expect(dropFirstChar('hello')).toBe('ello');
    expect(dropFirstChar('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((dropFirstChar as any)()).toBe('');
    expect((dropFirstChar as any)(undefined)).toBe('');
    expect((dropFirstChar as any)(null)).toBe('');
    expect((dropFirstChar as any)(true)).toBe('');
    expect((dropFirstChar as any)(0)).toBe('');
    expect((dropFirstChar as any)([])).toBe('');
    expect((dropFirstChar as any)({})).toBe('');
  });
});

describe('firstChar', () => {
  it('should return the first characters in string', () => {
    expect(firstChar('hello')).toBe('h');
    expect(firstChar('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((firstChar as any)()).toBe('');
    expect((firstChar as any)(undefined)).toBe('');
    expect((firstChar as any)(null)).toBe('');
    expect((firstChar as any)(true)).toBe('');
    expect((firstChar as any)(0)).toBe('');
    expect((firstChar as any)([])).toBe('');
    expect((firstChar as any)({})).toBe('');
  });
});

describe('joinCase', () => {
  it('should join string case', () => {
    expect(joinCase('-')('hello')).toBe('hello');
    expect(joinCase('-')('hello world')).toBe('hello-world');
    expect(joinCase('_')('hello world')).toBe('hello_world');
    expect(joinCase('')('Hello World')).toBe('helloworld');
    expect((joinCase as any)()('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((joinCase as any)('-')()).toBe('');
    expect((joinCase as any)('-')(undefined)).toBe('');
    expect((joinCase as any)('-')(null)).toBe('');
    expect((joinCase as any)('-')(true)).toBe('');
    expect((joinCase as any)('-')(0)).toBe('');
    expect((joinCase as any)('-')([])).toBe('');
    expect((joinCase as any)('-')({})).toBe('');
  });
});

describe('toCamel', () => {
  it('should return a string in camel case', () => {
    expect(toCamel('hello world')).toBe('helloWorld');
    expect(toCamel('hello_world')).toBe('helloWorld');
    expect(toCamel('hello-world')).toBe('helloWorld');
    expect(toCamel('HelloWorld')).toBe('helloWorld');
    expect(toCamel('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((toCamel as any)(undefined)).toBe('');
    expect((toCamel as any)()).toBe('');
    expect((toCamel as any)(null)).toBe('');
    expect((toCamel as any)(true)).toBe('');
    expect((toCamel as any)(0)).toBe('');
    expect((toCamel as any)([])).toBe('');
    expect((toCamel as any)({})).toBe('');
  });
});

describe('toKebabCase', () => {
  it('should return a string in kebab case', () => {
    expect(toKebabCase('hello world')).toBe('hello-world');
    expect(toKebabCase('hello_world')).toBe('hello-world');
    expect(toKebabCase('hello-world')).toBe('hello-world');
    expect(toKebabCase('HelloWorld')).toBe('hello-world');
    expect(toKebabCase('!--hello-¿?-world--121-**%')).toBe('hello-world-121');

    expect(toKebabCase('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((toKebabCase as any)(undefined)).toBe('');
    expect((toKebabCase as any)()).toBe('');
    expect((toKebabCase as any)(null)).toBe('');
    expect((toKebabCase as any)(true)).toBe('');
    expect((toKebabCase as any)(0)).toBe('');
    expect((toKebabCase as any)([])).toBe('');
    expect((toKebabCase as any)({})).toBe('');
  });
});
describe('toLower', () => {
  it('should return a string in lowercase', () => {
    expect(toLower('HELLO')).toBe('hello');
    expect(toLower('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((toLower as any)(undefined)).toBe('');
    expect((toLower as any)()).toBe('');
    expect((toLower as any)(null)).toBe('');
    expect((toLower as any)(true)).toBe('');
    expect((toLower as any)(0)).toBe('');
    expect((toLower as any)([])).toBe('');
    expect((toLower as any)({})).toBe('');
  });
});

describe('toLowerFirst', () => {
  it('should make first character lowercase', () => {
    expect(toLowerFirst('HELLO WORLD')).toBe('hELLO WORLD');
    expect(toLowerFirst('HELLO_WORLD')).toBe('hELLO_WORLD');
    expect(toLowerFirst('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((toLowerFirst as any)(undefined)).toBe('');
    expect((toLowerFirst as any)()).toBe('');
    expect((toLowerFirst as any)(null)).toBe('');
    expect((toLowerFirst as any)(true)).toBe('');
    expect((toLowerFirst as any)(0)).toBe('');
    expect((toLowerFirst as any)([])).toBe('');
    expect((toLowerFirst as any)({})).toBe('');
  });
});

describe('toPascalCase', () => {
  it('should return a string in pascal case', () => {
    expect(toPascalCase('hello world')).toBe('HelloWorld');
    expect(toPascalCase('hello_world')).toBe('HelloWorld');
    expect(toPascalCase('hello-world')).toBe('HelloWorld');
    expect(toPascalCase('HelloWorld')).toBe('HelloWorld');
    expect(toPascalCase('Hello World')).toBe('HelloWorld');
    expect(toPascalCase('__Hello World__')).toBe('HelloWorld');
    expect(toPascalCase('--Hello World--')).toBe('HelloWorld');
    expect(toPascalCase('!--hello-¿?-world--121-**%')).toBe('HelloWorld121');
    expect(toPascalCase('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((toPascalCase as any)(undefined)).toBe('');
    expect((toPascalCase as any)()).toBe('');
    expect((toPascalCase as any)(null)).toBe('');
    expect((toPascalCase as any)(true)).toBe('');
    expect((toPascalCase as any)(0)).toBe('');
    expect((toPascalCase as any)([])).toBe('');
    expect((toPascalCase as any)({})).toBe('');
  });
});

describe('toSnakeCase', () => {
  it('should return a string in pascal case', () => {
    expect(toSnakeCase('hello world')).toBe('hello_world');
    expect(toSnakeCase('hello_world')).toBe('hello_world');
    expect(toSnakeCase('hello-world')).toBe('hello_world');
    expect(toSnakeCase('HelloWorld')).toBe('hello_world');
    expect(toSnakeCase('Hello World')).toBe('hello_world');
    expect(toSnakeCase('__Hello World__')).toBe('hello_world');
    expect(toSnakeCase('--Hello World--')).toBe('hello_world');
    expect(toSnakeCase('!--hello-¿?-world--121-**%')).toBe('hello_world_121');
    expect(toSnakeCase('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((toSnakeCase as any)(undefined)).toBe('');
    expect((toSnakeCase as any)()).toBe('');
    expect((toSnakeCase as any)(null)).toBe('');
    expect((toSnakeCase as any)(true)).toBe('');
    expect((toSnakeCase as any)(0)).toBe('');
    expect((toSnakeCase as any)([])).toBe('');
    expect((toSnakeCase as any)({})).toBe('');
  });
});

describe('toTitle', () => {
  it('should return a string in title case', () => {
    expect(toTitle('hello world')).toBe('Hello World');
    expect(toTitle('Hello_world')).toBe('Hello_world');

    expect(toTitle('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((toTitle as any)(undefined)).toBe('');
    expect((toTitle as any)()).toBe('');
    expect((toTitle as any)(null)).toBe('');
    expect((toTitle as any)(true)).toBe('');
    expect((toTitle as any)(0)).toBe('');
    expect((toTitle as any)([])).toBe('');
    expect((toTitle as any)({})).toBe('');
  });
});

describe('toUpper', () => {
  it('should return a string in uppercase', () => {
    expect(toUpper('hello')).toBe('HELLO');
    expect(toUpper('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((toUpper as any)(undefined)).toBe('');
    expect((toUpper as any)()).toBe('');
    expect((toUpper as any)(null)).toBe('');
    expect((toUpper as any)(true)).toBe('');
    expect((toUpper as any)(0)).toBe('');
    expect((toUpper as any)([])).toBe('');
    expect((toUpper as any)({})).toBe('');
  });
});

describe('toUpperFirst', () => {
  it('should make the first character uppercase', () => {
    expect(toUpperFirst('hello world')).toBe('Hello world');
    expect(toUpperFirst('Hello_world')).toBe('Hello_world');
    expect(toUpperFirst('')).toBe('');
  });

  it('should return an empty string if type is not of string', () => {
    expect((toUpperFirst as any)(undefined)).toBe('');
    expect((toUpperFirst as any)()).toBe('');
    expect((toUpperFirst as any)(null)).toBe('');
    expect((toUpperFirst as any)(true)).toBe('');
    expect((toUpperFirst as any)(0)).toBe('');
    expect((toUpperFirst as any)([])).toBe('');
    expect((toUpperFirst as any)({})).toBe('');
  });
});
