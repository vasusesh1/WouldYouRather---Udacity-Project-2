import React, {Fragment} from 'react'
import {Container, Row} from 'reactstrap'
import {isEmpty} from "../../utils/helpers";
import {Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Nav from './TopNav'


const RouteTo = ({component: Component, isAuthenticated, ...rest}) => (
    <Route {...rest} render={(props) => {
        return (
            isAuthenticated
                ?
                <Fragment>
                    <Nav/>
                    <Container>
                        <Row>
                            <Component {...props}/>
                        </Row>
                    </Container>
                </Fragment>
                : <Redirect to={{
                    pathname: '/login',
                    state: {from: props.location}
                }}/>
        )
    }}/>
)

function mapStateToProps({authedUser}) {
    return {
        isAuthenticated: !isEmpty(authedUser)
    }
}

export default connect(mapStateToProps, null, null, {pure: false,})(RouteTo)