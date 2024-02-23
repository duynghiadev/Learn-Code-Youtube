const customerInitialState =[]

const customerReducer = (state = customerInitialState, action) => {
    switch(action.type){
        case 'SET_CUST': {
            return [].concat(action.payload)
        }
        case 'DELETE_CUST': {
            return state.filter(cust =>{
                return cust._id !== action.payload
            })
        }
        case 'EDIT_CUST': {
            return state.map(cust =>{
                if(cust._id === action.payload){
                    return Object.assign({},cust,action.payload)
                }else{
                    return Object.assign({},cust)
                }
            })
        }
        default: {
            return [].concat(state)
        }
    }
}

export default customerReducer