import {reducer} from './Reducer'

var INCREMENT = {
    type: 'INCREMENT'
}
var DECREMENT = {
    type: 'DECREMENT'
}
var RESET = {
    type: 'RESET'
}

export var increment = () => {
    reducer.dispatch(INCREMENT)
}

export var decrement = () => {
    reducer.dispatch(DECREMENT)
}

export var reset = () => {
    reducer.dispatch(RESET)
}