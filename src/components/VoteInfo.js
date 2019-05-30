import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class VoteInfo extends Component {
    render() {
        const {question} = this.props
        const {id, optionOne, optionTwo} = question
        return (
            <Link to={`/questions/${id}`}>
                <span>{optionOne.text} or {optionTwo.text}</span>
            </Link>
        )
    }

}

function passParamsAndValues({questions}, {id}) {
    return {
        question: questions[id]
    }

}

export default connect(passParamsAndValues)(VoteInfo)