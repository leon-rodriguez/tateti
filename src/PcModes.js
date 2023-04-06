import { useCallback, useEffect, useRef, useState } from "react";
import CheckWinner from "./CheckWinner";
import { EMPTY_BOARD, winnerCases } from "./constants";
import { CELLS_LIST } from "./constants";
import { restartAllRounds, RestartGame } from "./RestartGame";

// ['a1', 'a2', 'a3'],
// ['b1', 'b2', 'b3'],
// ['c1', 'c2', 'c3'],
// ['a1', 'b1', 'c1'],
// ['a2', 'b2', 'c2'],
// ['a3', 'b3', 'c3'],
// ['a1', 'b2', 'c3'],
// ['a3', 'b2', 'c1'],

const usePcModes = () => {
  const currentPlayer = useRef(1);
  const count = useRef(0);
  const timeOutRef = useRef(null);
  const [winner, setWinner] = useState("");
  const [turn, setTurn] = useState(true);
  const isOver = useRef(false);
  const [humanScore, setHumanScore] = useState(0);
  const [iaScore, setIaScore] = useState(0);
  const [round, setRound] = useState(1);
  const [gameWinner, setGameWinner] = useState(null);
  const [board, setBoard] = useState(EMPTY_BOARD);

  const handleClick = (cell) => {
    if (!isOver.current && board[cell] == null && !timeOutRef.current) {
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

  const randomNumberInRange = (min, max) => {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const subsistence = useCallback(
    (count) => {
      for (let i = 0; i < 8; i++) {
        let winnerCase = winnerCases[i];
        // ganar
        if (
          board[winnerCase[0]] + board[winnerCase[1]] + board[winnerCase[2]] ===
          20
        ) {
          if (board[winnerCase[0]] === null) {
            return winnerCase[0];
          }
          if (board[winnerCase[1]] === null) {
            return winnerCase[1];
          }
          if (board[winnerCase[2]] === null) {
            return winnerCase[2];
          }
        }
      }
      for (let i = 0; i < 8; i++) {
        let winnerCase = winnerCases[i];
        // no perder
        if (
          board[winnerCase[0]] + board[winnerCase[1]] + board[winnerCase[2]] ===
          2
        ) {
          if (board[winnerCase[0]] === null) {
            return winnerCase[0];
          }
          if (board[winnerCase[1]] === null) {
            return winnerCase[1];
          }
          if (board[winnerCase[2]] === null) {
            return winnerCase[2];
          }
        }
      }

      // primera jugada
      if (count === 1) {
        const firstOptions = ["a1", "a3", "c1", "c3", "b2"];
        const firstOptionsAvailables = [];
        //checkear si la casilla del medio es ocupada
        if (board[firstOptions[4]] === null) {
          return firstOptions[4];
        }
        for (let i = 0; i < firstOptions.length; i++) {
          if (board[firstOptions[i]] === null) {
            firstOptionsAvailables.push(firstOptions[i]);
          }
        }
        const randomFirst = randomNumberInRange(
          0,
          firstOptionsAvailables.length - 1
        );
        return firstOptionsAvailables[randomFirst];
      }

      // posicionarse bien
      for (let i = 0; i < 8; i++) {
        let winnerCase = winnerCases[i];
        if (
          board[winnerCase[0]] + board[winnerCase[1]] + board[winnerCase[2]] ===
          10
        ) {
          if (board[winnerCase[0]] === null) {
            return winnerCase[0];
          }
          if (board[winnerCase[2]] === null) {
            return winnerCase[2];
          }
        }
      }

      const boardOptionsAvailables = CELLS_LIST.filter(
        (item) => board[item] === null
      );
      const random = randomNumberInRange(0, boardOptionsAvailables.length - 1);
      return [boardOptionsAvailables[random]];
    },
    [board]
  );

  const attack = useCallback(
    (count) => {
      for (let i = 0; i < 8; i++) {
        let winnerCase = winnerCases[i];
        // ganar
        if (
          board[winnerCase[0]] + board[winnerCase[1]] + board[winnerCase[2]] ===
          2
        ) {
          if (board[winnerCase[0]] === null) {
            return winnerCase[0];
          }
          if (board[winnerCase[1]] === null) {
            return winnerCase[1];
          }
          if (board[winnerCase[2]] === null) {
            return winnerCase[2];
          }
        }
      }
      for (let i = 0; i < 8; i++) {
        let winnerCase = winnerCases[i];
        // no perder
        if (
          board[winnerCase[0]] + board[winnerCase[1]] + board[winnerCase[2]] ===
          20
        ) {
          if (board[winnerCase[0]] === null) {
            return winnerCase[0];
          }
          if (board[winnerCase[1]] === null) {
            return winnerCase[1];
          }
          if (board[winnerCase[2]] === null) {
            return winnerCase[2];
          }
        }
      }

      // primera jugada
      if (count === 1) {
        const firstOptions = ["a1", "a3", "c1", "c3", "b2"];
        const firstOptionsAvailables = [];
        //checkear si la casilla del medio es ocupada
        if (board[firstOptions[4]] === null) {
          return firstOptions[4];
        }
        for (let i = 0; i < firstOptions.length; i++) {
          if (board[firstOptions[i]] === null) {
            firstOptionsAvailables.push(firstOptions[i]);
          }
        }
        const randomFirst = randomNumberInRange(
          0,
          firstOptionsAvailables.length - 1
        );
        return firstOptionsAvailables[randomFirst];
      }

      const boardOptionsAvailables = CELLS_LIST.filter(
        (item) => board[item] === null
      );
      const random = randomNumberInRange(0, boardOptionsAvailables.length - 1);
      return [boardOptionsAvailables[random]];
    },
    [board]
  );

  // useEffect(() => {
  //   if (turn === false) {
  //     console.log('ke');
  //     const iaCell = attack(count.current);
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
          case "X":
            setHumanScore(humanScore + 1);
            break;
          case "O":
            setIaScore(iaScore + 1);
            break;
          default:
            break;
        }
      } else if (turn === false) {
        switch (result) {
          case "O":
            setHumanScore(humanScore + 1);
            break;
          case "X":
            setIaScore(iaScore + 1);
            break;
          default:
            break;
        }
      }
    }

    timeOutRef.current = setTimeout(() => {
      if (currentPlayer.current === 2 && !isOver.current && turn) {
        const iaCell = subsistence(count.current);
        setBoard({ ...board, [iaCell]: 10 });
        console.log("se ejecuto subsitnece");
        count.current += 1;
        currentPlayer.current = 1;
      } else if (
        currentPlayer.current === 1 &&
        !isOver.current &&
        turn === false
      ) {
        const iaCell = attack(count.current);
        setBoard({ ...board, [iaCell]: 1 });
        count.current += 1;
        currentPlayer.current = 2;
        console.log("meñi");
      }
      timeOutRef.current = null;
    }, 300);
  }, [attack, board, humanScore, iaScore, subsistence, turn, winner]);

  useEffect(() => {
    if (round === 6 && iaScore === humanScore) {
      isOver.current = true;
      setGameWinner("Empate");
    }
    if (6 - round < iaScore - humanScore || 6 - round < humanScore - iaScore) {
      isOver.current = true;
      if (iaScore > humanScore) {
        setGameWinner("La IA gano, suerte la proxima");
      } else {
        setGameWinner("Ganaste estas de ruta");
      }
    }
  }, [humanScore, iaScore, round, winner]);
  // useEffect(() => {
  //   CheckWinner(count, board, setWinner, isOver);
  // }, [board]);

  const handleRestart = () => {
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
  };

  const handleRestartAllRounds = () => {
    //TODO: Refactorizar handleRestart y handleRestartAllRounds en una sola funcion
    // con un flag addRound: true|false
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
  };

  return {
    board,
    turn,
    round,
    winner,
    humanScore,
    iaScore,
    gameWinner,
    handleClick,
    handleRestart,
    handleRestartAllRounds,
  };
};

export { usePcModes };
