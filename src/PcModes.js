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

const subsistence = (board, randomNumberInRange) => {
  for (let i = 0; i < 8; i++) {
    let winnerCase = winnerCases[i];
    //alguien gana
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
    //alguien gana
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

  const boardOptionsAvailables = CELLS_LIST.filter(
    (item) => board[item] === null
  );
  const random = randomNumberInRange(0, boardOptionsAvailables.length - 1);
  return [boardOptionsAvailables[random]];
};

export default subsistence;
