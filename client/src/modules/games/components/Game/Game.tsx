import React, { useState } from "react";

// Static files 
import "./Game.css";
import xImage from "../../assets/xImage.png";
import oImage from "../../assets/oImage.png";
import Board from "../../assets/Board.png";

const Game: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (index: number): void => {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = isXNext ? 'X' : 'O';
      setBoard(newBoard);
      setIsXNext(!isXNext);
      checkWinner(newBoard);
    }
  };

  const checkWinner = (currentBoard: string[]): void => {
    // Check for a winner here and update the 'winner' state
  };

  const resetGame = (): void => {
    setBoard(Array(9).fill(''));
    setIsXNext(true);
    setWinner(null);
  };

  const renderCell = (value: string, index: number): React.ReactNode => {
    const imageUrl = value === 'X' ? xImage : value === 'O' ? oImage : '';
    return (
      <div
        key={index}
        className="cell"
        onClick={() => handleClick(index)}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    );
  };


  return (
    <>
      <div className="game">
        <div className="main">
          <div className="ui">
            <div className="board">
              {[0, 1, 2].map((row) => (
                <div className="row" key={row}>
                  {[0, 1, 2].map((col) => {
                    const index = row * 3 + col;
                    return renderCell(board[index], index);
                  })}
                </div>
              ))}
            </div>
          </div>
          <br />
          <button onClick={resetGame}>RESET</button>
        </div>
      </div>
    </>
  );
}

export default Game;