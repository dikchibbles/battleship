import React from "react";
import Board from "./Board/Board";
import Header from "./Header";
import Dropdown from "./Dropdown/Dropdown";
import RulesContent from "../content/RulesContent";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="faq">
        <Dropdown title="Rules">
          <RulesContent />
        </Dropdown>
      </div>
      <Header />
      <div className="container">{<Board />}</div>
    </>
  );
};

export default App;
