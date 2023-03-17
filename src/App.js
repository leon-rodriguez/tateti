import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
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
        setBoard({ ...board, [cell]: 10 });
        currentPlayer.current = 1;
      }
    } else {
      return null;
    }
  };

  const restartGame = () => {
    setWinner('');
    currentPlayer.current = 1;
    count.current = 0;
    isOver.current = false;
    setBoard(emptyBoard);
  };

  useEffect(() => {
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
      if (count.current == 9) {
        setWinner('Empate');
      }
      // if (!board.includes(null)) {
      //   setWinner('Empate');
      // }

      // Object.entries(board).forEach(([key, value]) => {
      //   console.log(`key: ${key} value: ${value}`);
      // });
    }
  }, [board]);

  return (
    <div className="container">
      <div className="tittleContainer">
        <h1 className="tittle">Ta Te Ti</h1>
      </div>
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
              ? 'X'
              : winner == 'O'
              ? 'O'
              : ''}
          </span>
        </div>
        <button onClick={restartGame}>Jugar de vuelta</button>
      </div>
    </div>
  );
}

const Card = ({ board, text, onClick }) => {
  return (
    <div
      className="cell"
      onClick={onClick}
      style={{
        color:
          board[text] == 10
            ? '#01368d'
            : board[text] == 1
            ? '#ba3b46'
            : 'transparent',
      }}
    >
      {board[text] == 1 ? 'X' : board[text] == 10 ? 'O' : ''}
    </div>
  );
};

export default App;

// function App() {
//   //verificar quien va
//   let isOver = useRef(false);
//   const [ganador, setGanador] = useState('');
//   const [color, setColor] = useState('red');
//   let currentPlayer = 1;
//   let contador = 0;
//   let tatetiBoard = [];
//   let arrayTateti;

//   const play = (e) => {
//     // if (!isOver.current) {
//     //   contador += 1;
//     //   if (e.target.innerText == '') {
//     //     if (currentPlayer == 1) {
//     //       e.target.innerText = 'X';
//     //       // e.target.classList.remove('x');
//     //       // e.target.classList.remove('o');
//     //       e.target.classList.add('x');
//     //       currentPlayer = 2;
//     //     } else {
//     //       e.target.innerText = 'O';
//     //       // e.target.classList.remove('x');
//     //       // e.target.classList.remove('o');
//     //       e.target.classList.add('o');
//     //       currentPlayer = 1;
//     //     }
//     //   }
//     //   //tomar como va el juego
//     //   arrayTateti = document.querySelectorAll('.cell');
//     //   arrayTateti.forEach((item) => {
//     //     // tatetiBoard.push(item.innerText);
//     //     tatetiBoard[item.id] = item.innerText;
//     //   });
//     //   //ver si alguyien gano
//     //   if (contador > 3) {
//     //     for (let i = 0; i < 7; i += 3) {
//     //       if (
//     //         tatetiBoard[i] == 'X' &&
//     //         tatetiBoard[i + 1] == 'X' &&
//     //         tatetiBoard[i + 2] == 'X'
//     //       ) {
//     //         isOver.current = true;
//     //         setGanador('X');
//     //       } else if (
//     //         tatetiBoard[i] == 'O' &&
//     //         tatetiBoard[i + 1] == 'O' &&
//     //         tatetiBoard[i + 2] == 'O'
//     //       ) {
//     //         isOver.current = true;
//     //         setGanador('O');
//     //         setColor('blue');
//     //       }
//     //     }
//     //     for (let i = 0; i < 4; i++) {
//     //       if (
//     //         tatetiBoard[i] == 'X' &&
//     //         tatetiBoard[i + 3] == 'X' &&
//     //         tatetiBoard[i + 6] == 'X'
//     //       ) {
//     //         isOver.current = true;
//     //         setGanador('X');
//     //       } else if (
//     //         tatetiBoard[i] == 'O' &&
//     //         tatetiBoard[i + 3] == 'O' &&
//     //         tatetiBoard[i + 6] == 'O'
//     //       ) {
//     //         isOver.current = true;
//     //         setGanador('O');
//     //         setColor('blue');
//     //       }
//     //     }
//     //     if (
//     //       (tatetiBoard[0] == 'X' &&
//     //         tatetiBoard[4] == 'X' &&
//     //         tatetiBoard[8] == 'X') ||
//     //       (tatetiBoard[2] == 'X' &&
//     //         tatetiBoard[4] == 'X' &&
//     //         tatetiBoard[6] == 'X')
//     //     ) {
//     //       isOver.current = true;
//     //       setGanador('X');
//     //     } else if (
//     //       (tatetiBoard[0] == 'O' &&
//     //         tatetiBoard[4] == 'O' &&
//     //         tatetiBoard[8] == 'O') ||
//     //       (tatetiBoard[2] == 'O' &&
//     //         tatetiBoard[4] == 'O' &&
//     //         tatetiBoard[6] == 'O')
//     //     ) {
//     //       isOver.current = true;
//     //       setGanador('O');
//     //       setColor('blue');
//     //     }
//     //   }
//     //   //ver si termino el juego
//     //   if (!tatetiBoard.includes('')) {
//     //     setGanador('Empate');
//     //     console.log('termino');
//     //   }
//     // } else {
//     //   console.log('a');
//     // }
//   };

//   const restartGame = () => {
//     setGanador('');
//     currentPlayer = 1;
//     contador = 0;
//     isOver.current = false;
//     tatetiBoard = [];
//     arrayTateti = document.querySelectorAll('.cell');
//     arrayTateti.forEach((item) => {
//       item.innerText = '';
//       item.classList.remove('x');
//       item.classList.remove('o');
//     });
//   };

//   return (
//     <div className="container">
//       <div className="tittleContainer">
//         <h1 className="tittle">Ta Te Ti</h1>
//       </div>
//       <div className="flex">
//         <div className="containerTateti">
//           {/* <div className="cell" id="0" onClick={play}></div>
//           <div className="cell" id="1" onClick={play}></div>
//           <div className="cell" id="2" onClick={play}></div>
//           <div className="cell" id="3" onClick={play}></div>
//           <div className="cell" id="4" onClick={play}></div>
//           <div className="cell" id="5" onClick={play}></div>
//           <div className="cell" id="6" onClick={play}></div>
//           <div className="cell" id="7" onClick={play}></div>
//           <div className="cell" id="8" onClick={play}></div> */}
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//         </div>
//       </div>
//       <div className="footer">
//         <div className="winner">
//           El gandor es: <span style={{ color: { color } }}>{ganador}</span>
//         </div>
//         <button onClick={restartGame}>Jugar de vuelta</button>
//       </div>
//     </div>
//   );
// }

//
