import React from "react";

const RulesContent = () => {
  return (
    <div>
      <div className="game-components">
        <h3>Game Components</h3>
        <ul>
          <li>
            <strong>Game Boards:</strong> Each player has a primary ocean grid
            (10x10) for positioning their fleet and a secondary targeting grid
            to track shots fired.
          </li>
          <li>
            <strong>Ships:</strong> Each player has a fleet of five ships:
            <ul>
              <li>Carrier (5 spaces)</li>
              <li>Battleship (4 spaces)</li>
              <li>Cruiser (3 spaces)</li>
              <li>Submarine (3 spaces)</li>
              <li>Destroyer (2 spaces)</li>
            </ul>
          </li>
          <li>
            <strong>Peg Markers:</strong> White pegs to mark misses, and red
            pegs to mark hits.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RulesContent;
