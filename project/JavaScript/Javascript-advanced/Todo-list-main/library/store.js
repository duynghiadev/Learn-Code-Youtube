import { createStore } from './core.js'
import reducer from './reducer.js'
import withLogger from '../js/logger.js'

const { attach, connect, dispatch } = createStore(withLogger(reducer))

window.dispatch = dispatch

export {
    attach,
    connect
}