import React from 'react';
import Game from "./components/Game";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h5 style={{marginTop: "2rem"}}>MineSweeper</h5>
      <Game />
    </div>
  );
}

export default App;
