import React from 'react';

// const GameBoard = ({ board }) => {
const GameBoard = () => {

    const boardLength = 8;
    const initialBoard = []

        for (let i = 0; i < boardLength; i++) {
            for (let j = 0; j < boardLength; j++) {
                initialBoard[i][j] = Math.floor(Math.random()*10)

    }
    }


    return (
        <div className="board">
            <p>Game Time!</p>
            <p>Board - 1:</p>
            {initialBoard}

            <br/>
            <p>Board - 2: </p>
            {initialBoard.map((row, i) => (
                <div className="row" key={i}>
                    {row.map((num, j) => (
                        <div className="tile" key={`${i}-${j}`}>
                            {num}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GameBoard;