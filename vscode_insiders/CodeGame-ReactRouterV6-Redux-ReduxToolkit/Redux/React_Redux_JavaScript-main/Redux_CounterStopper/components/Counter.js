import React from "react";
import { connect } from "react-redux"


// const Counter = ({ seconds, counter }) => <div>Launch in: {seconds} {counter.counter} </div>;
const Counter = ({ seconds }) =>     <div>
        <p>Count:  { seconds } </p>
    </div>;


export default Counter;
