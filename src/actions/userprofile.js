import {addUser} from "../dataset/functions"
import {hideLoading, showLoading} from 'react-redux-loading'
import {USERS} from "./variables";


export function userList(users) {
    return {
        type: USERS,
        users
    }
}

export function addNewUser(username, name, avatarURL) {
    return (dispatch) => {
        dispatch(showLoading())
        return addUser({
            username,
            name,
            avatarURL
        })
            .then((users) => {
                dispatch(userList(users))
                dispatch(hideLoading())
            })
    }
}