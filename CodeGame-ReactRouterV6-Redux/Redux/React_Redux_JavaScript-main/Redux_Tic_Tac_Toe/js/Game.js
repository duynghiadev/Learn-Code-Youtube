import React, { Component } from "react";
import { connect } from "react-redux";

import {
  setup,
  placeAndProceed
} from "./redux/actions";
import Board from "./Board";

class Game extends Component {
  componentDidMount() {
    if (!this.props.gameReady) {
      this.props.setup(
        [...Array(9)],
        [
          { computer: false, token: "X" },
          { computer: true, token: "O" }
        ]
      );
    }
  }

  onPlace = index => {
    const {
      players,
      playerTurn,
      board,
      placeAndProceed
    } = this.props;
    const isHumanTurn = !players[playerTurn]
      .computer;
    if (isHumanTurn && !board[index]) {
      placeAndProceed(index);
    }
  };

  render() {
    const {
      board,
      gameReady,
      playerTurn
    } = this.props;
    return (
      (gameReady && (
        <div>
          <h2>Player {playerTurn}'s turn</h2>
          <Board
            board={board}
            onChooseTile={this.onPlace}
          />
        </div>
      )) ||
      "Setting up..."
    );
  }
}

const mapStateToProps = state => ({
  gameReady: state.gameReady,
  board: state.board,
  playerTurn: state.playerTurn,
  players: state.players
});

export default connect(
  mapStateToProps,
  { setup, placeAndProceed }
)(Game);
