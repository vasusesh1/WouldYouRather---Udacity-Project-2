import React, {Component} from 'react'
import UserProfile from '../common/UserProfile'
import {connect} from 'react-redux'

class Leaderboard extends Component {
    render() {
        const {users} = this.props
        return (
            <div>
                <h1>Leaderboard Info</h1>
                {users.map((userId) =>
                    <UserProfile key={userId} id={userId}/>
                )}
            </div>
        )
    }
}

function passParamsAndValues({users}) {
    return {
        users: Object.keys(users)
            .sort((a, b) => ((Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length)))
    }
}

export default connect(passParamsAndValues)(Leaderboard)