import {USERS} from "../actions/variables"

export default function users(state = {}, action) {
    switch (action.type) {
        case USERS:
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}