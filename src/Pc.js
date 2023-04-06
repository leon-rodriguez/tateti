import Card from "./Card";
import { CELLS_LIST } from "./constants";
import { usePcModes } from "./PcModes";

// setBoard({ ...board, [boardOptionsAvailables[random]]: 10 });
// a usar

const Pc = () => {
  const {
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
  } = usePcModes();

  return (
    <>
      <div className="containerTurnoPc">
        <div className="turnoPc">
          La IA es:{" "}
          <span className="p" style={{ color: turn ? "#01368d" : "#ba3b46" }}>
            {turn == true ? "O" : "X"}
          </span>
        </div>

        <div className="ronda">Ronda: {round === 6 ? "5" : round}</div>
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
            color: winner == "Empate" ? "#aa8f66" : "rgb(155, 155, 155)",
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
            <button className="playAgain item2" onClick={handleRestart}>
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
              <button onClick={handleRestartAllRounds}>Volver a jugar</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Pc;
