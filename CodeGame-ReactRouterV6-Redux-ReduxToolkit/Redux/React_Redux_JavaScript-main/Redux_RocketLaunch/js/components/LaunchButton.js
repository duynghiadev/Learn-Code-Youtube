import React from "react";

const LaunchButton = ({ deploy }) => <button onClick={ ()=> deploy() }>Launch the rocket!</button>;

export default LaunchButton;
