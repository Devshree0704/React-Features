import React from "react";
import { useEffect } from "react";

const BodyContainer = ({ num, bodyElement, setBodyElement, turn, setTurn }) => {
  const winningPattern1 = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 7],
    [2, 4, 6],
  ];

  const handleTurn = () => {
    setTurn(turn === "X" ? "O" : "X");
  };

  const handlePlayerTurn = (ind) => {
    handleTurn();
    const updatedElement = bodyElement.map((element, index) =>
      index === ind && element === null ? turn : element,
    );
    setBodyElement(updatedElement);
  };

  useEffect(() => {
    if (bodyElement.every((ele) => ele !== null)) {
      setTurn("Game draw");
      return;
    }

    winningPattern1.map((element) => {
      const [a, b, c] = element;
      if (
        bodyElement[a] &&
        bodyElement[a] === bodyElement[b] &&
        bodyElement[a] === bodyElement[c]
      ) {
        setTurn(`${bodyElement[a]} won`);
        return;
      }
    });
  }, [turn]);

  return (
    <div className="m-10 flex flex-col items-center">
      <div>Player: {turn}</div>
      <div
        className="mt-5 grid h-[300px] w-[300px] border-2 border-black bg-blue-100"
        style={{
          gridTemplateColumns: `repeat(${num}, 1fr)`,
          gridTemplateRows: `repeat(${num}, 1fr)`,
        }}
      >
        {bodyElement.map((element, index) => {
          return (
            <div
              className="flex cursor-pointer items-center justify-center border-2 border-black hover:bg-blue-200"
              key={index}
              style={
                element !== null || turn.includes("won")
                  ? { pointerEvents: "none", cursor: "not-allowed" }
                  : {}
              }
              onClick={() => {
                handlePlayerTurn(index);
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

export default BodyContainer;
