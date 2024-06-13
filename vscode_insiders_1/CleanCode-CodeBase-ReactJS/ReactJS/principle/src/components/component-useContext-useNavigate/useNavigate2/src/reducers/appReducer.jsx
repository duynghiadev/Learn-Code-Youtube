// reducers/appReducer.js
export const initialState = {
  celebrities: [],
  selectedCelebrity: null
}

export const actionTypes = {
  SET_CELEBRITIES: 'SET_CELEBRITIES',
  SET_SELECTED_CELEBRITY: 'SET_SELECTED_CELEBRITY'
}

const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CELEBRITIES:
      return { ...state, celebrities: action.payload }
    case actionTypes.SET_SELECTED_CELEBRITY:
      return { ...state, selectedCelebrity: action.payload }
    default:
      return state
  }
}

export default appReducer
