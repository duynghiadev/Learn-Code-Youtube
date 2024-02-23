import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';
import { addAnswerAgainstUser, addQuestionAgainstUser } from './users';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { GET_QUESTIONS } from './types';
import { ADD_QUESTION } from './types';
import { ADD_QUESTION_ANSWER } from './types';

export const getQuestions = (questions) => {
    return {
        type: GET_QUESTIONS,
        questions,
    }
}

export const handleSaveQuestion = (optionOneText, optionTwoText, history) => {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading());
        return _saveQuestion({
            author: authedUser,
            optionOneText,
            optionTwoText,
        })
        .then((question) => {
            dispatch(addQuestion(question))
            dispatch(addQuestionAgainstUser(question.id, authedUser))
            dispatch(hideLoading());
        })
        .then(() => history.push('/'))
    }
}

export const addQuestion = (question) => {
    return {    
        type: ADD_QUESTION,
        question,
    }
}

export const handleAddAnswer = (authedUser, qid, answer) => {
    return (dispatch) => {
        return _saveQuestionAnswer({
            authedUser,
            qid,
            answer,
        })
        .then(() => {
            dispatch(saveQuestionAnswer(authedUser, qid, answer))
            dispatch(addAnswerAgainstUser(authedUser, qid, answer))
        })
    }
}

export const saveQuestionAnswer = (authedUser, qid, answer) => {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        qid,
        answer,
    }
}