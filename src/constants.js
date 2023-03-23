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
