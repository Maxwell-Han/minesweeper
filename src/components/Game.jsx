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

  initBoard = (w, h) => {
    const board = [];
    for (let r = 0; r < h; r++) {
      board.push([]);
      for (let c = 0; c < w; c++) {
        board[r][c] = {
          row: r,
          col: c,
          isMine: false,
          isRevealed: false,
          isFlagged: false,
          mineCount: null,
          setOffMine: false,
        };
      }
    }
    return board;
  };

  plantMines = (board, w, h, mines) => {
    let count = 0;
    while (count < mines) {
      let row = Math.floor(Math.random() * h);
      let col = Math.floor(Math.random() * w);
      if (board[row][col].isMine === false) {
        board[row][col].isMine = true;
        count++;
      }
    }
  };

  render() {
    const { board, gameStarted, gameOver, gameWon } = this.state;
    return (
      <section>

      </section>
    );
  }
}

export default Game;
