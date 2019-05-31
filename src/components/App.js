import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from "./Dashboard";
import Login from './Login/Login'
import LoadingBar from 'react-redux-loading'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import '../App.css';
import RoutingLogic from './common/RoutingLogic'
import Question from './QuestionChoices/Question'
import Registration from "./Registration/Registration";
import NewQuestion from './NewQuestion'
import {connect} from 'react-redux'
import {handleDataSet} from "../actions/set"
import Leaderboard from "./Leaderboard/Leaderboard"
import {isEmpty} from "../dataset/checkpoint";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleDataSet())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar/>
                    {this.props.loading === true
                        ? null
                        : <div>
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={Registration}/>
                            <RoutingLogic path="/" exact component={Dashboard}/>
                            <RoutingLogic path="/leaderboard" component={Leaderboard}/>
                            <RoutingLogic path="/add" component={NewQuestion}/>
                            <RoutingLogic path="/questions/:question_id" component={Question}/>
                        </div>}
                </Fragment>
            </Router>
        );
    }
}

function passParamsAndValues({questions, users}) {
    return {
        loading: isEmpty(questions) || isEmpty(users)
    }
}

export default connect(passParamsAndValues)(App);
