import { useState, useRef, useEffect } from 'react';
import Human from './Human';
import Pc from './Pc';
import './App.css';

function App() {
  const [mode, setMode] = useState(1);

  // const changeMode = () =>{

  // }

  return (
    <div className="container">
      <div className="tittleContainer">
        <h1 className="tittle">Ta Te Ti</h1>
      </div>
      <div className="containerOptions">
        <button
          className="button1v1"
          onClick={() => {
            setMode(1);
          }}
          style={{ borderBottom: mode == 1 ? '3px solid #aa8f66' : 'none' }}
        >
          1 v 1
        </button>
        <button
          className="buttonPc"
          onClick={() => {
            setMode(2);
          }}
          style={{ borderBottom: mode == 2 ? '3px solid #aa8f66' : 'none' }}
        >
          VS PC
        </button>
      </div>
      {mode == 1 ? <Human /> : <Pc />}
    </div>
  );
}
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
