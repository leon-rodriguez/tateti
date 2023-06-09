import { useState, useRef, useEffect } from 'react';
import Card from './Card';
import RestartGame from './RestartGame';
import CheckWinner from './CheckWinner';
import { CELLS_LIST, EMPTY_BOARD } from './constants';
import subsistence from './PcModes';

// setBoard({ ...board, [boardOptionsAvailables[random]]: 10 });
// a usar

const Pc = () => {
  const [board, setBoard] = useState(EMPTY_BOARD);
  const [winner, setWinner] = useState('');
  let currentPlayer = useRef(1);
  let count = useRef(0);
  const isOver = useRef(false);
  const [humanScore, setHumanScore] = useState(0);
  const [iaScore, setIaScore] = useState(0);

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
      switch (result) {
        case 'X':
          setHumanScore(humanScore + 1);
          break;
        case 'O':
          setIaScore(iaScore + 1);
          break;
      }
    }
    if (currentPlayer.current === 2 && !isOver.current) {
      const iaCell = subsistence(board, randomNumberInRange, count.current);
      setBoard({ ...board, [iaCell]: 10 });
      count.current += 1;
      currentPlayer.current = 1;
    }
  }, [board]);

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
            ? 'Ganaste!'
            : winner == 'O'
            ? 'Perdiste :('
            : ''}
        </div>
        <div className="a">
          <div className="b item1">Vos: {humanScore}</div>
          <div className="c">
            <button
              className="playAgain item2"
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
          <div className="b item3">IA: {iaScore}</div>
        </div>
      </div>
    </>
  );
};

export default Pc;
