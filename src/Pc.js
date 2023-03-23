import { useState, useRef, useEffect } from 'react';
import Card from './Card';
import RestartGame from './RestartGame';
import CheckWinner from './CheckWinner';
import { CELLS_LIST, EMPTY_BOARD } from './constants';

const Pc = () => {
  const [board, setBoard] = useState(EMPTY_BOARD);
  const [winner, setWinner] = useState('');
  let currentPlayer = useRef(1);
  let count = useRef(0);
  const isOver = useRef(false);

  const handleClick = (cell) => {
    if (!isOver.current && board[cell] == null) {
      count.current += 1;
      if (currentPlayer.current == 1) {
        currentPlayer.current = 2;
        setBoard({ ...board, [cell]: 1 });
        // console.log(board[cell]);
      }
    }
  };

  useEffect(() => {
    const result = CheckWinner(board, count);
    if (result) {
      setWinner(result);
      isOver.current = true;
    }
    if (currentPlayer.current === 2 && !isOver.current) {
      iaChooseCell();
      currentPlayer.current = 1;
    }
  }, [board]);

  const iaChooseCell = () => {
    const boardOptionsAvailables = CELLS_LIST.filter(
      (item) => board[item] === null
    );
    const random = randomNumberInRange(0, boardOptionsAvailables.length - 1);
    setBoard({ ...board, [boardOptionsAvailables[random]]: 10 });
  };

  const randomNumberInRange = (min, max) => {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // useEffect(() => {
  //   CheckWinner(count, board, setWinner, isOver);
  // }, [board]);

  return (
    <>
      <div className="flex">
        <div className="containerTateti">
          {CELLS_LIST.map((item) => (
            <Card
              board={board}
              text={item}
              onClick={() => handleClick(item)}
              key={item}
            />
          ))}
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
              EMPTY_BOARD
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
