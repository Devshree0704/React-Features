import { useState } from "react";
import "./App.css";
import BodyContainer from "./Components/BodyContainer";

function App() {
  let num = 3;
  const [bodyElement, setBodyElement] = useState(
    [...Array(num * num)].fill(null),
  );
  const [turn, setTurn] = useState("X");

  const handleRestart = () => {
    setBodyElement([...Array(num * num)].fill(null));
    setTurn("X");
  };

  return (
    <div className="mt-5">
      <h2>Tic Tac Toe</h2>
      <button
        className="mt-5 cursor-pointer rounded-full border-2 border-black p-3 hover:bg-blue-100"
        onClick={handleRestart}
      >
        Restart Game
      </button>
      <BodyContainer
        num={num}
        bodyElement={bodyElement}
        setBodyElement={setBodyElement}
        turn={turn}
        setTurn={setTurn}
      />
    </div>
  );
}

export default App;
