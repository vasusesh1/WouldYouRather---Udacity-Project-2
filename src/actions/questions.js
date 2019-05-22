import {hideLoading, showLoading} from 'react-redux-loading'
import {ADDNEWQUESTION, QUESTIONS} from "./types";
import {saveQuestion, saveQuestionAnswer} from "../utils/api"
import {handleInitialData} from "./shared";


export function receiveQuestions(questions) {
    return {
        type: QUESTIONS,
        questions
    }

}

export function addQuestion(question) {
    return {
        type: ADDNEWQUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const {authedUser} = getState()
        dispatch(showLoading())
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then(() => {
                dispatch(handleInitialData())
                dispatch(hideLoading())
            })
    }
}

export function handleAnswerQuestion(qid, answer) {
    return (dispatch, getState) => {
        const {authedUser} = getState()
        dispatch(showLoading())
        return saveQuestionAnswer(authedUser, qid, answer)
            .then(() => {
                dispatch(handleInitialData())
                dispatch(hideLoading())
            })
    }

}