const employeeInitialState =[]

const employeeReducer = (state = employeeInitialState, action) => {
    switch(action.type){
        case 'SET_EMP': {
            return [].concat(action.payload)
        }
        case 'DELETE_EMP': {
            return state.filter(emp =>{
                return emp._id !== action.payload
            })
        }
        case 'EDIT_EMP': {
            return state.map(emp =>{
                if(emp._id === action.payload){
                    return Object.assign({},emp,action.payload)
                }else{
                    return Object.assign({},emp)
                }
            })
        }
        default: {
            return [].concat(state)
        }
    }
}

export default employeeReducer