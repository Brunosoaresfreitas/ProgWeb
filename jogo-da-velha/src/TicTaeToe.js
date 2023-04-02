//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Cálamo Andret - 2110383 
//DATA: 29/03/2023

import { useState, useEffect } from 'react';
import './TicTaeToe.css';

function TicTaeToe() {
  const emptyBoard = Array(9).fill("");
  const[board, setBoard] = useState(emptyBoard);
  const[currentPlayer, setCurrentPlayer] = useState ("O");
  const[winner, setWinner] = useState ();
  const handleCellClick = (index)  => {

    if (winner){console.log("Jogo Finalizado"); return null;}

    if (board[index] !== "") return null;
    setBoard(
      board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item)
      );

      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  const checkWinner = () => {
    const possibleWaysToWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],
      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    possibleWaysToWin.forEach(cells => {
      if(cells.every(cell => cell === "O")) setWinner("O");
      if(cells.every(cell => cell === "X")) setWinner("X"); 
    });

    checkDraw();
  }

  const checkDraw = () => {
    if(board.every(item => item !== "")){
      setWinner("E");
    }
  }


  useEffect(checkWinner, [board]);

  const resetGame = () => {
    setCurrentPlayer ("O");
    setBoard(emptyBoard);
    setWinner(null);
    }

  return (
    <main>
    <h1 className='title'>TIC TAC TOE</h1>

    <div className={`board ${winner ? "game-over" : ""}`}>
    {board.map((item, index) => (
        <div 
        key={index}
        className={`cell ${item}`}
        onClick={() =>handleCellClick(index)}
        >
          {item}
          </div>
      ))}

    </div>

    {winner &&
    <footer>
      {winner === "E" ?
      <h2 className="winner-message">
      <span className= {winner}>Empatou!</span>
    </h2> 
      :
      <h2 className="winner-message">
        <span className= {winner}>{winner}</span> venceu!
      </h2>
    }
      <button onClick={resetGame}>Recomeçar Jogo!</button>
    </footer>
}
    </main>
  );
}

export default TicTaeToe;
