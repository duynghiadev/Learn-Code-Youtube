import React, { useState, useEffect } from 'react';

function RandomNumbersBoard() {
    const [numbers, setNumbers] = useState(Array(64).fill(null).map(() => ({ value: null, clicked: false, marked: false })));
    const [hoveredTile, setHoveredTile] = useState(null);
    const [selectedTile, setSelectedTile] = useState(0);
    const [message, setMessage] = useState('');  useEffect(() => {
        generateRandomNumbers();
    }, []);
    const generateRandomNumbers = () => {
        const newNumbers = Array(64).fill(null).map(() => ({ value: Math.floor(Math.random() * 10), clicked: false, marked: false }));
        newNumbers[0].clicked = true;
        newNumbers[0].marked = true;
        setNumbers(newNumbers);
        setHoveredTile(null);
        setSelectedTile(0);
        setMessage('');
    };
    const handleTileHover = (index) => {
        setHoveredTile(index);
    };
    const handleTileClick = (index) => {
        if (index === selectedTile) {
            return;
        }  const newNumbers = [...numbers];
        const tile = newNumbers[index];  if (tile.clicked) {
            return;
        }  const selectedTileValue = newNumbers[selectedTile].value;  if (isAdjacent(selectedTile, index) && tile.value === selectedTileValue) {
            newNumbers[index].clicked = true;
            newNumbers[index].marked = true;
            newNumbers[selectedTile].marked = false;
            setSelectedTile(index);
            setMessage(`Tile ${index} revealed number ${tile.value}!`);
        } else {
            newNumbers[index].clicked = true;
            setMessage(`Tile ${index} revealed number ${tile.value}!`);
        }  setNumbers(newNumbers);
    };

    const isAdjacent = (tile1, tile2) => {
        const row1 = Math.floor(tile1 / 8);
        const col1 = tile1 % 8;
        const row2 = Math.floor(tile2 / 8);
        const col2 = tile2 % 8;    return Math.abs(row1 - row2) <= 1 && Math.abs(col1 - col2) <= 1 && !(row1 === row2 && col1 === col2);
    };

    return (
        <div>
            <button onClick={generateRandomNumbers}>Generate random numbers</button>
            <div style={{ display: 'flex', flexWrap: 'wrap', width: '320px' }}>
                {numbers.map(({ value, clicked, marked }, i) => (
                    <div
                        key={i}
                        style={{
                            width: '40px',
                            height: '40px',
                            border: '1px solid black',
                            textAlign: 'center',
                            backgroundColor: clicked ? (marked ? 'orange' : 'blue') : i === hoveredTile ? 'gray' : i === 0 ? 'green' : 'white',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={() => handleTileHover(i)}
                        onMouseLeave={() => handleTileHover(null)}
                        onClick={() => handleTileClick(i)}
                    >
                        {clicked ? value : '?'}
                    </div>
                ))}
            </div>
            {message && <p>{message}</p>}
        </div>
    );

}export default RandomNumbersBoard;
