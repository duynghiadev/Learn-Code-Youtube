import { findRandomSquare } from "../gameUtilities";

import {
  PLACE,
  SETUP,
  SET_PLAYER_TURN,
  SET_WINNER
} from "./actionTypes";

export function setup(board, players) {
  return {
    type: SETUP,
    board,
    players
  };
}

export function setPlayerTurn(playerIndex) {
  return {
    type: SET_PLAYER_TURN,
    playerTurn: playerIndex
  };
}

export function place(index) {
  return {
    type: PLACE,
    index: index
  };
}

export function setWinner(winner) {
  return {
    type: SET_WINNER,
    winner
  };
}

export function placeAndProceed(index) {
  return function(dispatch, getState) {
    dispatch(place(index));
    const openSquares = getState().board.filter(
      square => !square
    );
    if (openSquares.length > 0) {
      dispatch(nextPlayer());
    } else {
      alert(
        "Implement the winner check in redux/actions.js"
      );
      // const winner = findWinner(getState().board)
      // dispatch(setWinner(winner))
    }
  };
}

export function playAutomatically() {
  return function(dispatch, getState) {
    setTimeout(function() {
      const newBoard = getState().board;
      const randomSquare = findRandomSquare(
        newBoard
      );
      dispatch(placeAndProceed(randomSquare));
    }, 1000);
  };
}

export function nextPlayer() {
  return function(dispatch, getState) {
    const { playerTurn, players } = getState();
    const nextPlayer =
      (playerTurn + 1) % players.length;
    dispatch(setPlayerTurn(nextPlayer));
    if (players[nextPlayer].computer) {
      dispatch(playAutomatically());
    }
  };
}
