import { useState, useRef, useEffect } from 'react';
import Card from './Card';
import RestartGame from './RestartGame';
import CheckWinner from './CheckWinner';
import { EMPTY_BOARD, CELLS_LIST } from './constants';

const Human = () => {
  const [board, setBoard] = useState(EMPTY_BOARD);
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
        // console.log(board[cell]);
      } else {
        setBoard({ ...board, [cell]: 10 });
        currentPlayer.current = 1;
      }
    } else {
      return null;
    }
  };

  useEffect(() => {
    const result = CheckWinner(board, count);
    // console.log('result ', result);
    if (result) {
      setWinner(result);
      isOver.current = true;
    }
  }, [board]);

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
              ? 'X'
              : winner == 'O'
              ? 'O'
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

export default Human;
