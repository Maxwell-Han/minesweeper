import React, { Component } from "react";
import { OverlayTrigger, Button, Popover } from "react-bootstrap";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      width: 9,
      height: 9,
      mines: 9,
      gameStarted: false,
      gameOver: false,
      gameWon: false,
      showOverlay: false,
    };
  }

  render() {
    const { board, gameStarted, gameOver, gameWon } = this.state;
    return (
      <section>

      </section>
    );
  }
}

export default Game;
