import React, { Component } from "react";

import BoardSquare from "./BoardSquare";

export default class Board extends Component {
    renderSquare = (value, index) => {
        // Using index for the key isn't a good idea because
        // in other cases array ordering might not be predictable.
        return (
            <BoardSquare
                key={index}
                value={value}
                onClick={() =>
                    this.props.onChooseTile(index)
                }
            />
        );
    };
    render() {
        const { board } = this.props;
        return (
            <div className="board">
                {board.map(this.renderSquare)}
            </div>
        );
    }
}