const departmentInitialState = []

const departmentReducer = (state = departmentInitialState, action) => {
    switch(action.type){
        case 'SET_DEPT': {
            return [].concat(action.payload)
            //return {...action.payload}
        }
        case 'DELETE_DEPT': {
            return state.filter(dept =>{
                return dept._id !== action.payload
            })
        }
        case 'EDIT_DEPT': {
            return state.map(dept =>{
                if(dept._id === action.payload){
                    return Object.assign({},dept,action.payload)
                }else{
                    return Object.assign({},dept)
                }
            })
        }
        default: {
            return [].concat(state)
        }
    }
}

export default departmentReducer