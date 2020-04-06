import React from 'react';

const Display = (props) => {
  const {gameStarted, gameOver, gameWon} = props;
  return (
    <section>
      {gameStarted && !gameOver && <h5>Happy Mining!</h5>}
      {gameWon && <h5>You Win!!</h5>}
      {gameOver && !gameWon && <h5>Game Over</h5>}
    </section>
  );
}

export default Display;
