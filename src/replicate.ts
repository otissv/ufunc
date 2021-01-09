/**
 * Replicates a value in a list n number of times.
 *
 * @param length - Number of times the value will be replicated
 * @param value - Value to be replicated.
 *
 * @returns Returns a list with the value replicated n times.
 */
export const replicate = (length: number) => <Value>(
  value: Value,
): readonly Value[] => Array(length).fill(value) as readonly Value[];
