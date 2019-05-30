import React, {Component} from 'react'
import {Label} from 'reactstrap'
import {connect} from 'react-redux'
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';

class UserProfile extends Component {
    render() {
        const {user} = this.props
        const questsAsked = user.questions.length
        const questsAnswered = Object.keys(user.answers).length
        return (
            <div>
      <Card>
        <CardBody>
          <CardTitle>{user.name}</CardTitle>
        </CardBody>
        <img src={user.avatarURL} />
        <CardBody>
          <CardText>
          <div>
          <Label for="questsasked">Questions Asked:</Label><span id="asked">{questsAsked}</span>
          </div>
          <div>
          <Label for="questsanswered">Questions Answered:</Label><span id="answered">{questsAnswered}</span>
          </div>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

}

function passParamsAndValues({users}, {id}) {
    return {
        user: users[id]
    }
}

export default connect(passParamsAndValues)(UserProfile)