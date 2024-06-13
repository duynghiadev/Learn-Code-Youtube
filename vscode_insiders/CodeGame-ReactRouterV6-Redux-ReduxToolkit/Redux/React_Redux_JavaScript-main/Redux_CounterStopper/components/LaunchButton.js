import React from "react";

const LaunchButton = ({ deploy }) => <button onClick={ ()=> deploy() }>Start</button>;
const StopButton = ({ stopTimer }) => <button onClick={ ()=> stopTimer() }>Stop</button>;
const AddButton = ({ addValue }) => <button onClick={ ()=> addValue() }>Add Value</button>;

    const ValueList = ({ list }) => (
        <div>
            <h1>Value list</h1>
            {console.log(list)}
            <p>{list}</p>
        </div>
    )

export {
    LaunchButton,
    StopButton,
    AddButton,
    ValueList,
};
