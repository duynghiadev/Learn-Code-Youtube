import React from "react";
import { connect } from "react-redux"


// const Counter = ({ seconds, counter }) => <div>Launch in: {seconds} {counter.counter} </div>;
const Counter = ({ seconds }) =>     <div>
        <p>It's the final countdown! Launch in:  { seconds } </p>
    </div>;


export default Counter;
