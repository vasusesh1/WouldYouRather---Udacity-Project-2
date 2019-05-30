import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleQuestionChoice} from "../actions/questions"
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'
import {Redirect} from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        q1: '',
        q2: '',
        routeTo: false
    }

    handleChange = (e) => {
        const {value, id} = e.target
        this.setState(() => ({[id]: value}))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {q1, q2} = this.state
        const {dispatch} = this.props

        dispatch(handleQuestionChoice(q1, q2))

        this.setState(() => ({
            q1: '',
            q2: '',
            routeTo: true
        }))
    }

    render() {
        const {q1, q2, routeTo} = this.state

        if (routeTo === true) {
            return <Redirect to='/'/>
        }
        return (
            <div>
                <h1>Would You Rather??..</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="q1">Question 1</Label>
                        <Input
                            type="text"
                            id="q1"
                            placeholder="First Choice"
                            onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="q2">Question 2</Label>
                        <Input
                            type="text"
                            id="q2"
                            placeholder="Second Choice"
                            onChange={this.handleChange}/>
                    </FormGroup>
                    <Button
                        disabled={q1 === '' && q2 === ''}>Add New Question</Button>
                </Form>
            </div>
        )
    }
}

export default connect()(NewQuestion)