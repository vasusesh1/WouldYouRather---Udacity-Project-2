import {USER_AUTHENTICATION, LOG_OUT} from "../actions/variables";

export default function authedUser(state = {}, action) {
    switch (action.type) {
        case USER_AUTHENTICATION:
            return action.id

        case LOG_OUT:
            return {}
        default:
            return state
    }

}