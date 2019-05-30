import React, {Component} from 'react'
import {Card, CardBody, CardSubtitle, CardTitle} from 'reactstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './Choice.css'


class Choice extends Component {
    clickEvent = (e) => {
        e.preventDefault()
        const {onClick, optionName} = this.props
        //onClick(optionName)
        onClick(optionName)

    }

    render() {
        const {option, resultView, voteBoolean, percent} = this.props

        const {text, votes} = option
        return (
            resultView === false ?
                <Link to="#" onClick={this.clickEvent}>
                    <Card className={voteBoolean ? ("pink-highlight") : ''}>
                        <CardBody>
                            <CardTitle>{text}</CardTitle>
                            {resultView === true &&
                            (<CardSubtitle>Num Of Votes: {votes.length} ({percent}%)</CardSubtitle>)
                            }
                        </CardBody>
                    </Card>
                </Link>
                :
                <Card className={voteBoolean? ("pink-highlight") : ''}>
                    <CardBody>
                        <CardTitle>{text}</CardTitle>
                        {resultView === true &&
                        (<CardSubtitle>Num Of Votes: {votes.length} ({percent}%)</CardSubtitle>)
                        }
                    </CardBody>
                </Card>
        )
    }
}

function passParamsAndValues({authedUser, questions, users}, {questionId, optionName}) {
    const question = questions[questionId]
    const option = question[optionName]
    const currentUser = users[authedUser]

    return {
        option,
        voteBoolean: option.votes.includes(authedUser),
        resultView: Object.keys(currentUser.answers).includes(questionId),
        percent: ((option.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100).toFixed(2),
        optionName
    }
}

export default connect(passParamsAndValues)(Choice)