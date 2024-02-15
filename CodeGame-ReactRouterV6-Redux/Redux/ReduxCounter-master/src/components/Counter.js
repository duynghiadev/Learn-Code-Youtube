import React from 'react';
import {connect} from 'react-redux'
import {increment, decrement, reset} from './../redux/Actions'

const Counter = (props) => {
    return (
        <div className="App">
            <h1>Count: {props.count}</h1>
            <button onClick={() => {
                increment()
            }}>Plus</button>
            <button onClick={() => {
                decrement()
            }}>Minus</button>
            <button onClick={() => {
                reset()
            }}>Reset</button>
        </div>
    );
};

const mapStateToProps = state => ({
    count: state.count
})

export default connect(mapStateToProps)(Counter);
