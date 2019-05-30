import {USER_AUTHENTICATION, LOG_OUT} from "./variables";

export function Userauth(id) {
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