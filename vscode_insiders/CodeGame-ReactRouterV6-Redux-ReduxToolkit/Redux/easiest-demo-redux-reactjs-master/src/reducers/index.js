import { combineReducers, createStore } from 'redux';

const initialState = {
    activeTab: 1,
    textFieldValue: '',
    selectedValue: 1,
    checkedValue: [],
    selectedOption: ''
}

// reducers.js
export const actionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'tabClicked':
            return {
                ...state,
                activeTab: action.activeTab
            }
        case 'textFieldChange':
            return {
                ...state,
                textFieldValue: action.textFieldValue.target.value
            }
        case 'selectChange':
            return {
                ...state,
                selectedValue: action.selectedValue.target.value
            }
        case 'checkboxChange':
            return {
                ...state,
                checkedValue: action.checkedValue
            }
        case 'radioChanged':
            return {
                ...state,
                selectedOption: action.selectedOption
            }
        default:
            return state;
    }
};


export const reducers = combineReducers({
    actionReducer
});


// store.js
export const store = createStore(reducers);