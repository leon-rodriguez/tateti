const RestartGame = (
  setWinner,
  count,
  currentPlayer,
  isOver,
  setBoard,
  emptyBoard
) => {
  setWinner('');
  currentPlayer.current = 1;
  count.current = 0;
  isOver.current = false;
  setBoard(emptyBoard);
};

export default RestartGame;
