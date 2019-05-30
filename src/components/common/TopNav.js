import React, {Component, Fragment} from 'react'
import LoadingBar from 'react-redux-loading'
import {NavLink, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


import {Nav as BoostrapNav, Navbar, NavbarBrand, NavItem, NavLink as BootstrapNavLink} from 'reactstrap'
import {signOut} from "../../actions/authenticateUser"

class TopNav extends Component {
    state = {
        redirect: false
    }


    logoutFeature = (e) => {
        e.preventDefault()
        this.props.dispatch(signOut())
        this.setState(() => ({
            redirect: true
        }))
    }

    render() {
        const {user} = this.props
        const {redirect} = this.state

        if (redirect === true) {
            return (<Redirect to="/login"/>)
        }

        return (
            <Fragment>
                <Navbar>
                    <NavbarBrand>Hi {user.name}!!</NavbarBrand>
                    <BoostrapNav>
                        <NavItem>
                            <BootstrapNavLink tag={NavLink} exact to="/">Dashboard</BootstrapNavLink>
                        </NavItem>
                        <NavItem>
                            <BootstrapNavLink tag={NavLink} to="/leaderboard">Leaderboard</BootstrapNavLink>
                        </NavItem>
                        <NavItem>
                            <BootstrapNavLink tag={NavLink} to="/add">Add New Question</BootstrapNavLink>
                        </NavItem>
                        <NavItem>
                            <BootstrapNavLink tag={NavLink} to="#" onClick={this.logoutFeature}>Log out</BootstrapNavLink>
                        </NavItem>
                    </BoostrapNav>
                </Navbar>
                <LoadingBar/>
            </Fragment>
        )
    }
}

function passParamsAndValues({authedUser, users}) {
    return {
        user: users[authedUser]
    }
}

export default connect(passParamsAndValues)(TopNav)