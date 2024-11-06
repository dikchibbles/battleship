import React, { useState } from "react";
import Board from "./Board/Board";
import Header from "./Header";
import Dropdown from "./Dropdown/Dropdown";
import RulesContent from "../content/RulesContent";
import "./App.css";

const App = () => {
  const [activeBoard, setActiveBoard] = useState("ownShips");

  const toggleActiveBoard = () => {
    activeBoard === "ownShips"
      ? setActiveBoard("enemyShips")
      : setActiveBoard("ownShips");
  };

  return (
    <>
      <Header />
      <div className="main">
        <div className="faq">
          <Dropdown title="Rules">
            <RulesContent />
          </Dropdown>
        </div>
        <div className="board-container">
          <div className="board-options">
            <label
              htmlFor="filter"
              className="switch"
              aria-label="Toggle Filter"
            >
              <input type="checkbox" id="filter" onClick={toggleActiveBoard} />
              <span>Own</span>
              <span>Enemy</span>
            </label>
          </div>
          {<Board />}
        </div>
      </div>
    </>
  );
};

export default App;
