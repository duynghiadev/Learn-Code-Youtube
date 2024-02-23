import React from "react";

export default ({ value, onClick }) => (
    <div className="square" onClick={onClick}>
        {value}
    </div>
);