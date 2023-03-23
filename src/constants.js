export const CELLS_LIST = [
  'a1',
  'a2',
  'a3',
  'b1',
  'b2',
  'b3',
  'c1',
  'c2',
  'c3',
];

export const EMPTY_BOARD = CELLS_LIST.reduce(
  (acc, item) => ({ ...acc, [item]: null }),
  {}
);

export const winnerCases = [
  ['a1', 'a2', 'a3'],
  ['b1', 'b2', 'b3'],
  ['c1', 'c2', 'c3'],
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3'],
  ['a1', 'b2', 'c3'],
  ['a3', 'b2', 'c1'],
];
