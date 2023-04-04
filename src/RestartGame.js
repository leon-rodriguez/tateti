const RestartGame = (
  setWinner,
  count,
  currentPlayer,
  isOver,
  setBoard,
  emptyBoard,
  setTurn,
  turn,
  round,
  setRound
) => {
  setWinner('');
  currentPlayer.current = 1;
  count.current = 0;
  isOver.current = false;
  setBoard(emptyBoard);
  setTurn(!turn);
  setRound(round + 1);
};

const restartAllRounds = (
  setWinner,
  count,
  currentPlayer,
  isOver,
  setBoard,
  emptyBoard,
  setTurn,
  turn,
  setRound,
  setGameWinner,
  setHumanScore,
  setIaScore
) => {
  setWinner('');
  currentPlayer.current = 1;
  count.current = 0;
  isOver.current = false;
  setBoard(emptyBoard);
  setTurn(true);
  setRound(1);
  setGameWinner(null);
  setHumanScore(0);
  setIaScore(0);
};

export { RestartGame, restartAllRounds };
