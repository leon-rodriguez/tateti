import { useState, useRef, useEffect } from 'react';
import Card from './Card';
import { RestartGame, restartAllRounds } from './RestartGame';
import CheckWinner from './CheckWinner';
import { CELLS_LIST, EMPTY_BOARD } from './constants';
import { subsistence, attack } from './PcModes';

// setBoard({ ...board, [boardOptionsAvailables[random]]: 10 });
// a usar

const Pc = () => {
  const [board, setBoard] = useState(EMPTY_BOARD);
  const [winner, setWinner] = useState('');
  const [turn, setTurn] = useState(true);
  let currentPlayer = useRef(1);
  let count = useRef(0);
  const isOver = useRef(false);
  const [humanScore, setHumanScore] = useState(0);
  const [iaScore, setIaScore] = useState(0);
  const [round, setRound] = useState(1);
  const [gameWinner, setGameWinner] = useState(null);

  const handleClick = (cell) => {
    if (!isOver.current && board[cell] == null) {
      count.current += 1;
      //la maquina mueve segunda
      if (turn) {
        if (currentPlayer.current == 1) {
          currentPlayer.current = 2;
          setBoard({ ...board, [cell]: 1 });
          // console.log(board[cell]);
        }
      } else if (turn == false && currentPlayer.current == 2) {
        setBoard({ ...board, [cell]: 10 });
        currentPlayer.current = 1;
      }
    }
  };

  // useEffect(() => {
  //   if (turn === false) {
  //     console.log('ke');
  //     const iaCell = attack(board, randomNumberInRange, count.current);
  //     setBoard({ ...board, [iaCell]: 1 });
  //   }
  // }, [turn]);

  // useEffect(() => {
  //   if (turn === false) {
  //     if (winner === 'X') {
  //       setWinner('O');
  //     } else if (winner === 'O') {
  //       setWinner('X');
  //     }
  //   }
  // }, [winner]);

  useEffect(() => {
    const result = CheckWinner(board, count);
    if (result) {
      setWinner(result);
      console.log(`se designo de winner a ${winner}`);
      isOver.current = true;
      if (turn) {
        switch (result) {
          case 'X':
            setHumanScore(humanScore + 1);
            break;
          case 'O':
            setIaScore(iaScore + 1);
            break;
        }
      } else if (turn === false) {
        switch (result) {
          case 'O':
            setHumanScore(humanScore + 1);
            break;
          case 'X':
            setIaScore(iaScore + 1);
            break;
        }
      }
    }
    if (currentPlayer.current === 2 && !isOver.current && turn) {
      setTimeout(() => {
        const iaCell = subsistence(board, randomNumberInRange, count.current);
        setBoard({ ...board, [iaCell]: 10 });
        console.log('se ejecuto subsitnece');
        count.current += 1;
        currentPlayer.current = 1;
      }, 300);
    } else if (
      currentPlayer.current === 1 &&
      !isOver.current &&
      turn === false
    ) {
      setTimeout(() => {
        const iaCell = attack(board, randomNumberInRange, count.current);
        setBoard({ ...board, [iaCell]: 1 });
        count.current += 1;
        currentPlayer.current = 2;
        console.log('meñi');
      }, 300);
    }
  }, [board]);

  const randomNumberInRange = (min, max) => {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    if (round === 6 && iaScore === humanScore) {
      isOver.current = true;
      setGameWinner('Empate');
    }
    if (6 - round < iaScore - humanScore || 6 - round < humanScore - iaScore) {
      isOver.current = true;
      if (iaScore > humanScore) {
        setGameWinner('La IA gano, suerte la proxima');
      } else {
        setGameWinner('Ganaste estas de ruta');
      }
    }
  }, [winner]);
  // useEffect(() => {
  //   CheckWinner(count, board, setWinner, isOver);
  // }, [board]);

  return (
    <>
      <div className="containerTurnoPc">
        <div className="turnoPc">
          La IA es:{' '}
          <span className="p" style={{ color: turn ? '#01368d' : '#ba3b46' }}>
            {turn == true ? 'O' : 'X'}
          </span>
        </div>

        <div className="ronda">Ronda: {round === 6 ? '5' : round}</div>
      </div>
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
          {/* {winner == 'Empate'
            ? 'Empate'
            : winner == 'X'
            ? 'Ganaste!'
            : winner == 'O'
            ? 'Perdiste :('
            : ''} */}
          El ganador es: {winner}
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
                  EMPTY_BOARD,
                  setTurn,
                  turn,
                  round,
                  setRound
                );
              }}
            >
              Jugar de vuelta
            </button>
          </div>
          <div className="b item3">IA: {iaScore}</div>
        </div>
      </div>
      {gameWinner ? (
        <div className="overlay">
          <div className="popup">
            <h2>{gameWinner}</h2>
            <div>
              <button
                onClick={() => {
                  restartAllRounds(
                    setWinner,
                    count,
                    currentPlayer,
                    isOver,
                    setBoard,
                    EMPTY_BOARD,
                    setTurn,
                    turn,
                    setRound,
                    setGameWinner,
                    setHumanScore,
                    setIaScore
                  );
                }}
              >
                Volver a jugar
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Pc;
