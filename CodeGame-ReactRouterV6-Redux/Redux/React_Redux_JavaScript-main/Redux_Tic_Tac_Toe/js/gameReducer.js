import {
  PLACE,
  SETUP,
  SET_PLAYER_TURN,
  SET_WINNER
} from "./actionTypes";

const initialState = {
  gameReady: false
};

function game(state = initialState, action) {
  switch (action.type) {
    case SETUP:
      return {
        ...state,
        board: action.board,
        players: action.players,
        playerTurn: 0,
        gameReady: true,
        winner: null
      };
    case PLACE:
      return {
        ...state,
        board: state.board.map(
          (value, index) =>
            index === action.index
              ? state.players[state.playerTurn]
                  .token
              : value
        )
      };
    case SET_PLAYER_TURN:
      return {
        ...state,
        playerTurn: action.playerTurn
      };
    case SET_WINNER:
      return {
        ...state,
        winner: action.winner
      };
    default:
      return state;
  }
}

export default game;
