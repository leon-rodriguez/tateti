const winnerCases = [
  ['a1', 'a2', 'a3'],
  ['b1', 'b2', 'b3'],
  ['c1', 'c2', 'c3'],
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3'],
  ['a1', 'b2', 'c3'],
  ['a3', 'b2', 'c1'],
];

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
