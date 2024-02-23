import { GET_USERS, ADD_ANSWER_TO_USER, ADD_QUESTION_TO_USER } from '../actions/types';

export const users = (state = {}, action) => {
    switch (action.type) {
        case GET_USERS :
            return {
                ...state,
                ...action.users,
            } 
        case ADD_ANSWER_TO_USER :
            const { authedUser, qid, answer } = action;
            return {
                ...state,
                [authedUser] : {
                    ...state[authedUser],
                    answers : {
                        ...state[authedUser].answers,
                        [qid] : answer,
                    }
                }
            }
        case ADD_QUESTION_TO_USER : 
            return {
                ...state,
                [action.authedUser] : {
                    ...state[action.authedUser],
                    questions : state[action.authedUser].questions.concat([action.id])
                }
            }
        default :
            return state;
    }
}
export default users;