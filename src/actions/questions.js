import {hideLoading, showLoading} from 'react-redux-loading'
import {ADDNEWQUESTION, QUESTIONS} from "./variables";
import {saveQuestion, saveQuestionAnswer} from "../dataset/functions"
import {handleDataSet} from "./set";


export function questionList(questions) {
    return {
        type: QUESTIONS,
        questions
    }

}

export function addnewQuestion(question) {
    return {
        type: ADDNEWQUESTION,
        question
    }
}

export function handleQuestionChoice(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const {authedUser} = getState()
        dispatch(showLoading())
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then(() => {
                dispatch(handleDataSet())
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
                dispatch(handleDataSet())
                dispatch(hideLoading())
            })
    }

}