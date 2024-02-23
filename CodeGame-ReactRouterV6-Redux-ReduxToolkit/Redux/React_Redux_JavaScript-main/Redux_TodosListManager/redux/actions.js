export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const REMOVE_TODO = "REMOVE_TODO"

// export const REMOVE_TODO_2S = "REMOVE_TODO_2S"

export const addTodo = (todoName) => ({
    type: ADD_TODO,
    todoName,
});

export const toggle = (title) => ({
    type: TOGGLE_TODO,
    payload: title,
})

export const remove = (title) => ({
    type: REMOVE_TODO,
    payload: title,
})

// export const remove_2s = (title) => ({
//     type: REMOVE_TODO_2S,
//     // payload: title,
// })



