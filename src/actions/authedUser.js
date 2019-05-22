import {USER_AUTHENTICATION, LOG_OUT} from "./types";

export function authenticateUser(id) {
    return {
        type: USER_AUTHENTICATION,
        id
    }
}

export function signOut(id) {
    return {
        type: LOG_OUT,
        id
    }
}