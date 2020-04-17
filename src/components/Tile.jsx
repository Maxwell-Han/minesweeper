import React from "react";
import mine from '../images/minesweeper_bomb.png'

const Tile = (props) => {
  const {
    row,
    col,
    isFlagged,
    isMine,
    isRevealed,
    handleTile,
    mineCount,
    setOffMine,
    gameRows,
  } = props;

  const tileStyle = { border: "1px solid darkgray" };
  const revealedTile = { ...tileStyle, backgroundColor: "lightgray" };
  const hitMineStyle = { ...tileStyle, backgroundColor: "red" };
  const handleClick = (row, col) => {
    handleTile(row, col);
  };

  const setStyle = () => {
    let tileSize;
    gameRows > 14 ? (tileSize = "30px") : (tileSize = "45px");
    const sizeObj = { width: tileSize, height: tileSize };
    if (setOffMine) return { ...hitMineStyle, ...sizeObj };
    if (isRevealed) return { ...revealedTile, ...sizeObj };
    return { ...tileStyle, ...sizeObj };
  };
  return (
    <td
      style={setStyle()}
      backgroundColor={setOffMine ? "red" : ""}
      className={isRevealed ? "tile-tile-revealed" : "tile-unrevealed"}
      onClick={() => handleClick(row, col)}
    >
      {isFlagged ? (
        <img src="flag.png" alt="flag" className="flag-img" />
      ) : null}
      {isMine && isRevealed ? (
        <img src={mine} alt="bomb" className="mine-img" />
      ) : null}
      {isRevealed && mineCount ? mineCount : null}
    </td>
  );
};

export default Tile;
