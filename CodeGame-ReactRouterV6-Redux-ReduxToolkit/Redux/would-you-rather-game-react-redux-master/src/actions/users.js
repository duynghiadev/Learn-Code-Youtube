import { GET_USERS } from './types';
import { ADD_ANSWER_TO_USER } from './types';
import { ADD_QUESTION_TO_USER } from './types';

export const getUsers = (users) => {
    return {
        type: GET_USERS,
        users,
    }
}

export const addAnswerAgainstUser = (authedUser, qid, answer) => {
    return {
        type: ADD_ANSWER_TO_USER,
        authedUser,
        qid,
        answer,
    }
}

export const addQuestionAgainstUser = (qid, authedUser) => {
    return {
        type: ADD_QUESTION_TO_USER,
        qid,
        authedUser,
    }
}