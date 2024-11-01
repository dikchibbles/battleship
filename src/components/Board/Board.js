import React from "react";
import "./Board.css";

const Board = () => {
  const createBoard = () => {
    const cells = [];
    "ABCDEFGHIJ".split("").forEach((l) => {
      for (let i = 1; i <= 10; i++) {
        cells.push(
          <div
            key={`${l}${i}`}
            data-testid={`${l}${i}`}
            role="gridcell"
            className={`cell ${l}${i}`}
          ></div>
        );
      }
    });
    return cells;
  };

  return <div className="board">{createBoard()}</div>;
};

export default Board;
