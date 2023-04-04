import { useState, useRef, useEffect } from 'react';
import Human from './Human';
import Pc from './Pc';
import './App.css';

function App() {
  const [mode, setMode] = useState(1);

  return (
    <div className={mode == 1 ? 'container' : 'containerPc'}>
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
      {/* {mode === 2 ? (
        <div className="containerTurnoPc">
          <div className="turnoPc">La IA es:</div>
          <span
            className="p"
            style={{ color: turn == 'O' ? '#01368d' : '#ba3b46' }}
          >
            {turn}
          </span>
        </div>
      ) : (
        ''
      )} */}
      {mode === 1 ? <Human /> : <Pc />}
    </div>
  );
}
export default App;
