import { winnerCases } from './constants';
import { CELLS_LIST } from './constants';

// ['a1', 'a2', 'a3'],
// ['b1', 'b2', 'b3'],
// ['c1', 'c2', 'c3'],
// ['a1', 'b1', 'c1'],
// ['a2', 'b2', 'c2'],
// ['a3', 'b3', 'c3'],
// ['a1', 'b2', 'c3'],
// ['a3', 'b2', 'c1'],

const subsistence = (board, randomNumberInRange, count) => {
  for (let i = 0; i < 8; i++) {
    let winnerCase = winnerCases[i];
    // no perder
    if (
      board[winnerCase[0]] + board[winnerCase[1]] + board[winnerCase[2]] ===
      20
    ) {
      if (board[winnerCase[0]] === null) {
        return winnerCase[0];
      }
      if (board[winnerCase[1]] === null) {
        return winnerCase[1];
      }
      if (board[winnerCase[2]] === null) {
        return winnerCase[2];
      }
    }
  }
  for (let i = 0; i < 8; i++) {
    let winnerCase = winnerCases[i];
    // ganar
    if (
      board[winnerCase[0]] + board[winnerCase[1]] + board[winnerCase[2]] ===
      2
    ) {
      if (board[winnerCase[0]] === null) {
        return winnerCase[0];
      }
      if (board[winnerCase[1]] === null) {
        return winnerCase[1];
      }
      if (board[winnerCase[2]] === null) {
        return winnerCase[2];
      }
    }
  }

  // primera jugada
  if (count === 1) {
    const firstOptions = ['a1', 'a3', 'c1', 'c3', 'b2'];
    const firstOptionsAvailables = [];
    for (let i = 0; i < firstOptions.length; i++) {
      if (board[firstOptions[i]] === null) {
        firstOptionsAvailables.push(firstOptions[i]);
      }
    }
    const randomFirst = randomNumberInRange(
      0,
      firstOptionsAvailables.length - 1
    );
    return firstOptionsAvailables[randomFirst];
  }

  // posicionarse bien
  for (let i = 0; i < 8; i++) {
    let winnerCase = winnerCases[i];
    if (
      board[winnerCase[0]] + board[winnerCase[1]] + board[winnerCase[2]] ===
      10
    ) {
      if (board[winnerCase[0]] === null) {
        return winnerCase[0];
      }
      if (board[winnerCase[2]] === null) {
        return winnerCase[2];
      }
    }
  }

  const boardOptionsAvailables = CELLS_LIST.filter(
    (item) => board[item] === null
  );
  const random = randomNumberInRange(0, boardOptionsAvailables.length - 1);
  return [boardOptionsAvailables[random]];
};

export default subsistence;
