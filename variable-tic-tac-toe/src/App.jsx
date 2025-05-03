import "./App.css";
import { useState } from "react";
import Game from "./Components/Game";

function App() {
  const [gridSize, setGridSize] = useState(3);
  const [gameBody, setGameBody] = useState([...Array(3 * 3)].fill(null));
  const [nextPlayer, setNextPlayer] = useState("X");

  const handleGrid = (event) => {
    const value = Number(event.target.value);
    setGridSize(value);
    setGameBody([...Array(value * value)].fill(null));
  };

  const handleRestart = () => {
    setGameBody([...Array(gridSize * gridSize)].fill(null));
    setNextPlayer("X");
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <h3 className="font-bold">Variable Tic-Tac-Toe</h3>

      <div className="flex flex-col gap-5">
        <button
          className="cursor-pointer rounded-full border-2 border-black p-3"
          onClick={handleRestart}
        >
          Restart Game
        </button>

        <input
          type="number"
          className="border-2 border-black p-2"
          placeholder="Enter grid size..."
          value={gridSize}
          onChange={(event) => {
            handleGrid(event);
          }}
        />
      </div>

      <div>
        <Game
          gameBody={gameBody}
          setGameBody={setGameBody}
          gridSize={gridSize}
          nextPlayer={nextPlayer}
          setNextPlayer={setNextPlayer}
        />
      </div>
    </div>
  );
}

export default App;
