import {ADDNEWQUESTION, QUESTIONS} from "../actions/variables"

export default function questions(state = {}, action) {
    switch (action.type) {
        case QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADDNEWQUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        default:
            return state
    }

}
