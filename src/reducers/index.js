import {combineReducers} from 'redux'
import questions from './questions'
import users from './userprofile'
import authedUser from './authenticateUser'
import {loadingBarReducer} from 'react-redux-loading'

export default combineReducers({
    questions,
    users,
    authedUser,
    loadingBar: loadingBarReducer
})