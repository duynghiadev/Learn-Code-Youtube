const ticketsInitialState =[]

const ticketsReducer = (state = ticketsInitialState, action) => {
    switch(action.type){
        case 'SET_TICKET': {
            return [].concat(action.payload)
        }
        case 'DELETE_TICKET': {
            return state.filter(tick =>{
                return tick._id !== action.payload
            })
        }
        case 'EDIT_TICKET': {
            return state.map(tick =>{
                if(tick._id === action.payload){
                    return Object.assign({},tick,action.payload)
                }else{
                    return Object.assign({},tick)
                }
            })
        }
        default: {
            return [].concat(state)
        }
    }
}

export default ticketsReducer