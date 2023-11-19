import {useState} from 'react';
import React from 'react';

function Counter() {

    const [counter, setCounter] = useState(0);

    const handleIncrement = function() {
        setCounter(counter + 1);
    }

    const handleDecrement = function() {
        setCounter(counter - 1);
    }

    return (
        <>
            <h1>Counter {counter}</h1>
            <button onClick={handleIncrement}>
                Increment
            </button>
            <button onClick={handleDecrement}>
                Decrement
            </button>
        </>
    );
}

export default Counter;