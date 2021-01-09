export const logger = (
  printer: (...messages: readonly string[]) => unknown,
) => (...messages: readonly string[]) => <Value>(value: Value): Value => {
  // eslint-disable-next-line functional/no-expression-statement
  printer(...messages);
  return value;
};
