import React from "react";
import Board from "./Board/Board";
import Header from "./Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">{<Board />}</div>
    </>
  );
};

export default App;
