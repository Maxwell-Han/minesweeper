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

  handleTile = (row, col) => {
    if (this.state.gameOver) return;
    const tile = { ...this.state.board[row][col] };

    if (tile.isMine) {
      this.state.board[row][col].setOffMine = true;
      this.revealBombs(this.state.board);
      this.setState({ gameOver: true });
      return;
    }
    if (!tile.isMine) {
      const newBoard = this.state.board.map((r) => {
        return r.map((c) => {
          return c;
        });
      });
      this.revealEmpties(newBoard, row, col);
      this.setState({ board: newBoard });
      const revealed = this.getRevealedCount(newBoard);
      const totalEmpty =
        this.state.width * this.state.height - this.state.mines;
      if (totalEmpty === revealed) {
        this.setState({ gameOver: true, gameWon: true });
      }
    }
  };

  getNeighbors = (board, row, col) => {
    const neighbors = [];
    for (let r = row - 1; r <= row + 1; r++) {
      if (r < 0 || r >= this.state.height) continue;
      for (let c = col - 1; c <= col + 1; c++) {
        if (c < 0 || c >= this.state.width) continue;
        let tile = board[r][c];
        if (tile) {
          neighbors.push(tile);
        }
      }
    }
    return neighbors;
  };

  revealEmpties = (board, row, col) => {
    // starts on non-mine tile but can run recursively on mine tile
    const current = board[row][col];
    if (current.isMine || current.isRevealed) return;

    current.isRevealed = true;
    current.isFlagged = false;

    let neighbors = this.getNeighbors(board, row, col);
    let mines = neighbors.filter((tile) => tile.isMine).length;
    if (mines === 0) {
      neighbors.forEach((tile) =>
        this.revealEmpties(board, tile.row, tile.col)
      );
    } else {
      current.mineCount = mines;
    }
  };

  revealBombs = (board) => {
    board.forEach((row) => {
      row.forEach((tile) => {
        if (tile.isMine) {
          tile.isRevealed = true;
        }
      });
    });
  };

  getRevealedCount = (board) => {
    let revealed = 0;
    board.forEach((row) => {
      row.forEach((tile) => {
        if (tile.isRevealed) {
          revealed++;
        }
      });
    });
    return revealed;
  };

  handleNewGame = (gameObj) => {
    const board = this.initBoard(gameObj.width, gameObj.height);
    this.plantMines(board, gameObj.width, gameObj.height, gameObj.mines);
    this.setState({ ...gameObj, board, gameOver: false, gameStarted: true });
  };

  render() {
    const { board, gameStarted, gameOver, gameWon } = this.state;
    return <section></section>;
  }
}

export default Game;
