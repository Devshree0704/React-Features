import React from "react";
import { useState, useEffect } from "react";

const Game = ({
  gameBody,
  gridSize,
  setGameBody,
  nextPlayer,
  setNextPlayer,
}) => {
  const [patterns, setPatterns] = useState([]);

  const handleChance = (ind) => {
    setNextPlayer(nextPlayer === "X" ? "O" : "X");

    const updatedGameBody = gameBody.map((element, index) =>
      ind === index && element === null ? nextPlayer : element,
    );

    setGameBody(updatedGameBody);
  };

  const calculateWinningPattern = () => {
    const allWinningPattern = [];
    const diagonalPattern1 = [];
    const diagonalPattern2 = [];
    const end = gridSize * gridSize;

    for (let i = 0; i < end; i = i + gridSize) {
      let winningPattern = [];
      for (let j = i; j < i + gridSize; j++) {
        winningPattern.push(j);
      }
      allWinningPattern.push(winningPattern);
    }

    for (let i = 0; i < gridSize; i = i + 1) {
      let winningPattern = [];
      for (let j = i; j < gridSize * gridSize; j = j + gridSize) {
        winningPattern.push(j);
      }
      allWinningPattern.push(winningPattern);
    }

    for (let i = 0; i < end; i++) {
      const value = gridSize + 1;
      if (i % value === 0) {
        diagonalPattern1.push(i);
      }
    }

    for (let i = 1; i < end - 1; i++) {
      const value = gridSize - 1;
      if (i % value === 0) {
        diagonalPattern2.push(i);
      }
    }

    allWinningPattern.push(diagonalPattern1);
    allWinningPattern.push(diagonalPattern2);
    setPatterns(allWinningPattern);
  };

  console.log("winningPatters:", patterns);

  useEffect(() => {
    setPatterns([]);
    calculateWinningPattern();
  }, [gridSize]);

  useEffect(() => {
    if (gameBody.every((element) => element !== null)) {
      setNextPlayer("Game draw");
      return;
    }

    for (let i = 0; i < patterns.length; i++) {
      let flag = 0;
      let playerWon;
      const [...items] = patterns[i];
      for (let j = 0; j < items.length - 1; j++) {
        if (
          gameBody[items[j]] &&
          gameBody[items[j]] === gameBody[items[j + 1]]
        ) {
          console.log(gameBody[items[j]]);
          flag = 1;
          playerWon = gameBody[items[j]];
        } else {
          flag = 0;
          break;
        }
      }
      if (flag === 1) {
        setNextPlayer(`${playerWon} won`);
      }
    }
  }, [nextPlayer]);

  return (
    <div>
      <div>Next Player: {nextPlayer}</div>
      <div
        className={`mx-5 grid border-2 border-black bg-amber-200`}
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          height: `${gridSize * 100}px`,
          width: `${gridSize * 100}px`,
        }}
      >
        {gameBody.map((element, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center border-2 border-black"
              style={
                nextPlayer?.includes("won")
                  ? { pointerEvents: "none", cursor: "not-allowed" }
                  : {}
              }
              onClick={() => {
                handleChance(index);
              }}
            >
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Game;
