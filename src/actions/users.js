import {hideLoading, showLoading} from 'react-redux-loading'
import {addUser} from "../utils/api"

import {USERS} from "./types";

export function receiveUsers(users) {
    return {
        type: USERS,
        users
    }
}

export function handleAddUser(username, name, avatarURL) {
    return (dispatch) => {
        dispatch(showLoading())
        return addUser({
            username,
            name,
            avatarURL
        })
            .then((users) => {
                dispatch(receiveUsers(users))
                dispatch(hideLoading())
            })
    }
}