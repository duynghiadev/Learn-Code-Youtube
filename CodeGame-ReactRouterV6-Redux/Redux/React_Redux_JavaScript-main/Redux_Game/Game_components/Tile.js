import React from "react";function Tile(props) {
    const { value, clicked, marked, reveal, onMouseEnter, onMouseLeave, onClick } = props;  let className = "tile";
    if (clicked) {
        className += " clicked";
    }
    if (marked) {
        className += " marked";
    }
    if (reveal) {
        className += " reveal";
    }  return (
        <div
            className={className}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            {reveal && value}
        </div>
    );
}export default Tile;
