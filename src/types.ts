export const EQ = 'eq';
export const NOT_EQ = 'notEq';
export const LT = 'lt';
export const GT = 'gt';
export const LT_EQ = 'ltEq';
export const GT_EQ = 'gtEq';

export type BoundTypes = typeof EQ | typeof LT | typeof GT;

export type ComparisonOperatorTypes =
  | typeof EQ
  | typeof NOT_EQ
  | typeof LT
  | typeof GT
  | typeof LT_EQ
  | typeof GT_EQ;

export type Step = ({
  from,
  to,
  list,
}: Partial<{
  readonly from: number;
  readonly to: number;
  readonly list: readonly number[];
}>) => (accumulativeValue: number) => number;
