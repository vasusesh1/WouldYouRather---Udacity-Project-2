import React, {Component} from 'react'

import {Button, Form, FormGroup, Input, Label} from 'reactstrap'

import {addNewUser} from "../../actions/userprofile"
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'

class Registration extends Component {

    state = {
        username: '',
        name: '',
        avatarURL: '',
        registerBoolean: false
    }

    submitEvent = (e) => {
        e.preventDefault()
        const {username, name, avatarURL} = this.state
        const {dispatch} = this.props

        dispatch(addNewUser(username, name, avatarURL))
        this.setState({registerBoolean: true})
    }

    changeEvent = (e) => {
        const param = e.target.id
        const val = e.target.value
        let switchState = {}
        switchState[param] = val
        this.setState(switchState)
    }

    render() {
        const {registerBoolean} = this.state
        if (registerBoolean) {
            return <Redirect to="/login"/>
        }

        return (
            <div>

                <Form onSubmit={this.submitEvent} className="form-signin">
                    <h2 className="form-heading">Register Here</h2>
                    <FormGroup>
                        <Label for="username">UserName</Label>
                        <Input
                            type="text"
                            id="username"
                            placeholder="Username"
                            onChange={this.changeEvent}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="name">Full Name</Label>
                        <Input
                            type="text"
                            id="name"
                            placeholder="Full Name"
                            onChange={this.changeEvent}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="optionOne">Avatar URL</Label>
                        <Input
                            type="text"
                            id="avatarUrl"
                            placeholder="Avatar URL"
                            onChange={this.changeEvent}/>
                    </FormGroup>
                    <Button type="submit" id="_submit" name="_submit"
                            className="btn btn-lg btn-primary btn-block">Sign Me Up!</Button>
                    <Link to="/login">Return to login page</Link>
                </Form>
            </div>
        )
    }
}

export default connect()(Registration)