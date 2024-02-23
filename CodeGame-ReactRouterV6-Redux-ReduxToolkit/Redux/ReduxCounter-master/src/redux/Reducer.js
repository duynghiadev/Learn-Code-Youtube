import { createStore } from 'redux'

var store = {
    count: 0
}

function reducer_fn(state = store, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }

        case 'DECREMENT':
            return {
                count: state.count - 1
            }

        case 'RESET':
            return {
                count: 0
            }

        default:
            return state
    }
}

export const reducer = createStore(reducer_fn)
