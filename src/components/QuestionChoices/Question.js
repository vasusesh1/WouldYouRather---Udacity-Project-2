import React, {Component, Fragment} from 'react'


import ErrorHandling from "./ErrorHandling";
import {Row} from 'reactstrap'
import UserProfile from '../common/UserProfile'
import {connect} from 'react-redux'
import Choice from "./Choice"
import {handleAnswerQuestion} from '../../actions/questions'


class Question extends Component {
    state = {
        logVote: false
    }

    manageVotes = (logVote) => {
        const {dispatch, question} = this.props
        dispatch(handleAnswerQuestion(question.id, logVote))
    }

    render() {
        const {question} = this.props
        return (
            <Fragment>
                {question
                    ?
                    (<div>
                        <h2>Would you rather ??..</h2>
                        <Row>
                            <UserProfile id={question.author}/>
                        </Row>
                        <Row>
                            <Choice questionId={question.id} optionName="optionOne" onClick={this.manageVotes}/>
                            <Choice questionId={question.id} optionName="optionTwo" onClick={this.manageVotes}/>
                        </Row>
                    </div>)
                    : <ErrorHandling/>}
            </Fragment>
        )
    }
}

function passParamsAndValues({questions, users, authedUser}, props) {
    const {question_id} = props.match.params
    const question = questions[question_id]
    const user = users[authedUser]

    return {
        question,
        authedUser,
        showResults: Object.keys(user.answers).includes(question_id)
    }
}

export default connect(passParamsAndValues)(Question)