import { winnerCases } from './constants';

const CheckWinner = (board, count) => {
  for (let i = 0; i < 8; i++) {
    let winnerCase = winnerCases[i];
    //alguien gana
    if (
      board[winnerCase[0]] + board[winnerCase[1]] + board[winnerCase[2]] ===
      3
    ) {
      console.log('gana ', board[winnerCase[0]]);
      return 'X';
    }
    if (
      board[winnerCase[0]] + board[winnerCase[1]] + board[winnerCase[2]] ===
      30
    ) {
      return 'O';
    }
    // caso de empate
    if (count.current == 9) {
      // console.log('empate');
      return 'Empate';
    }
  }
};

export default CheckWinner;
