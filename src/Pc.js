import { useState, useRef, useEffect } from 'react';
import Card from './Card';
import RestartGame from './RestartGame';
import CheckWinner from './CheckWinner';

const Pc = () => {
  const emptyBoard = {
    a1: null,
    a2: null,
    a3: null,
    b1: null,
    b2: null,
    b3: null,
    c1: null,
    c2: null,
    c3: null,
  };

  const boardOptions = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
  let boardOptionsAvailables = [];

  const [board, setBoard] = useState(emptyBoard);
  const [winner, setWinner] = useState('');
  let currentPlayer = useRef(1);
  let count = useRef(0);
  const isOver = useRef(false);

  const handleClick = (cell) => {
    if (!isOver.current && board[cell] == null) {
      count.current += 1;
      if (currentPlayer.current == 1) {
        setBoard({ ...board, [cell]: 1 });
        currentPlayer.current = 2;
        console.log(board[cell]);
      } else {
        // setBoard({ ...board, [cell]: 10 });
        currentPlayer.current = 1;
        iaChooseCell();
      }
    } else {
      return null;
    }
  };

  const iaChooseCell = () => {
    boardOptionsAvailables = [];
    boardOptions.forEach((item) => {
      if (board[item] == null) {
        boardOptionsAvailables.push(item);
        let random = randomNumberInRange(0, boardOptionsAvailables.length - 1);
        setBoard({ ...board, [boardOptionsAvailables[random]]: 10 });
        console.log('la celda marcada es ' + boardOptionsAvailables[random]);
        return;
      }
    });
  };

  const randomNumberInRange = (min, max) => {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    CheckWinner(count, board, setWinner, isOver);
  }, [board]);

  return (
    <>
      <div className="flex">
        <div className="containerTateti">
          <Card board={board} text={'a1'} onClick={() => handleClick('a1')} />
          <Card board={board} text={'a2'} onClick={() => handleClick('a2')} />
          <Card board={board} text={'a3'} onClick={() => handleClick('a3')} />
          <Card board={board} text={'b1'} onClick={() => handleClick('b1')} />
          <Card board={board} text={'b2'} onClick={() => handleClick('b2')} />
          <Card board={board} text={'b3'} onClick={() => handleClick('b3')} />
          <Card board={board} text={'c1'} onClick={() => handleClick('c1')} />
          <Card board={board} text={'c2'} onClick={() => handleClick('c2')} />
          <Card board={board} text={'c3'} onClick={() => handleClick('c3')} />
        </div>
      </div>
      <div className="footer">
        <div
          className="winner"
          style={{
            color: winner == 'Empate' ? '#aa8f66' : 'rgb(155, 155, 155)',
          }}
        >
          {winner == 'Empate'
            ? 'Empate'
            : winner == 'X'
            ? 'El ganador es:'
            : winner == 'O'
            ? 'El ganador es:'
            : ''}
          <span
            className="winnerMark"
            style={{ color: winner == 'X' ? '#ba3b46' : '#01368d' }}
          >
            {winner == 'Empate'
              ? ''
              : winner == 'X'
              ? 'Humano'
              : winner == 'O'
              ? 'IA'
              : ''}
          </span>
        </div>
        <button
          className="playAgain"
          onClick={() => {
            RestartGame(
              setWinner,
              count,
              currentPlayer,
              isOver,
              setBoard,
              emptyBoard
            );
          }}
        >
          Jugar de vuelta
        </button>
      </div>
    </>
  );
};

export default Pc;