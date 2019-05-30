import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Login.css'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {Button, Form, FormGroup, Label} from 'reactstrap'
import {Userauth} from "../../actions/authenticateUser"

class Login extends Component {
    state = {
        userName: '',
        logBoolean: false
    }

    submitProcess = (e) => {
        e.preventDefault()
        const {userName} = this.state
        const {dispatch} = this.props

        if (userName !== "") {
            dispatch(Userauth(userName))
            this.setState(() => ({logBoolean: true}))
        }
    }

    processChange = (e) => {
        const userName = e.target.value
        this.setState(() => ({userName}))
    }

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/'}}

        const {logBoolean} = this.state

        if (logBoolean) {
            return <Redirect to={from}/>
        }


        return (
            <Form onSubmit={this.submitProcess} className="login">
                <h2 className="form-heading">Hi!! Let's get you logged in..</h2>
                <FormGroup>
                    <Label htmlFor="userName" className="sr-name">UserName</Label>

                    <select id="userName" className="us-name"
                            value={this.state.userName}
                            onChange={this.processChange}>
                        <option value='' disabled>Select</option>
                        {this.props.users.map((user) => (
                                <option key={user.id} value={user.id}>{user.name}</option>
                            )
                        )}
                    </select>

                </FormGroup>
                <Button type="submit" id="_submit" name="_submit"
                        className="btn btn-lg btn-primary btn-block">Login</Button>
                <Link to="/register">New user? Register here</Link>
            </Form>
        )
    }
}

function passParamsAndValues({users, authedUser}) {
    return {
        users: Object.values(users).map((user) => {
            return ({
                id: user.id,
                name: user.name
            })
        }),
        username: authedUser
    }
}

export default connect(passParamsAndValues)(Login)