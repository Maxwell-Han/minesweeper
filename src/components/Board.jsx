import React from "react";
import Tile from "./Tile";

const Board = (props) => {
  const { board, handleTile, mineCount } = props || { board: [] };
  return (
    <section>
      {!board.length && <h5>Pick a Game</h5>}
      <table className="board-container">
        <tbody>
          {board.length > 0 &&
            board.map((row, r) => {
              return (
                <tr key={row + r}>
                  {row.map((col, c) => {
                    return (
                      <Tile
                        key={`${r}-${c}`}
                        {...col}
                        handleTile={handleTile}
                        gameRows={board.length}
                      />
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default Board;
