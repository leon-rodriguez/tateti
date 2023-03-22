const CheckWinner = (count, board, setWinner, isOver) => {
  if (count.current > 3) {
    //comparacion horizontal
    if (board.a1 + board.a2 + board.a3 == 3) {
      isOver.current = true;
      setWinner('X');
      return;
    } else if (board.a1 + board.a2 + board.a3 == 30) {
      isOver.current = true;
      setWinner('O');
      return;
    }
    if (board.b1 + board.b2 + board.b3 == 3) {
      isOver.current = true;
      setWinner('X');
      return;
    } else if (board.b1 + board.b2 + board.b3 == 30) {
      isOver.current = true;
      setWinner('O');
      return;
    }
    if (board.c1 + board.c2 + board.c3 == 3) {
      isOver.current = true;
      setWinner('X');
      return;
    } else if (board.c1 + board.c2 + board.c3 == 30) {
      isOver.current = true;
      setWinner('O');
      return;
    }

    //comparacion vertical
    if (board.a1 + board.b1 + board.c1 == 3) {
      isOver.current = true;
      setWinner('X');
      return;
    } else if (board.a1 + board.b1 + board.c1 == 30) {
      isOver.current = true;
      setWinner('O');
      return;
    }
    if (board.a2 + board.b2 + board.c2 == 3) {
      isOver.current = true;
      setWinner('X');
      return;
    } else if (board.a2 + board.b2 + board.c2 == 30) {
      isOver.current = true;
      setWinner('O');
      return;
    }
    if (board.a3 + board.b3 + board.c3 == 3) {
      isOver.current = true;
      setWinner('X');
      return;
    } else if (board.a3 + board.b3 + board.c3 == 30) {
      isOver.current = true;
      setWinner('O');
      return;
    }
    if (
      board.a1 + board.b2 + board.c3 == 3 ||
      board.a3 + board.b2 + board.c1 == 3
    ) {
      isOver.current = true;
      setWinner('X');
      return;
    } else if (
      board.a1 + board.b2 + board.c3 == 30 ||
      board.a3 + board.b2 + board.c1 == 30
    ) {
      isOver.current = true;
      setWinner('O');
    }
    if (count.current == 9) {
      setWinner('Empate');
    }
  }
};

export default CheckWinner;
