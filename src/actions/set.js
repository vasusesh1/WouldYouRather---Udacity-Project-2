import {hideLoading, showLoading} from 'react-redux-loading'
import {userList} from "./userprofile";
import {questionList} from "./questions";
import {getInitialData} from "../dataset/functions"


export function handleDataSet() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData().then(({users, questions}) => {
            dispatch(userList(users))
            dispatch(questionList(questions))
            dispatch(hideLoading())
        })
    }

}