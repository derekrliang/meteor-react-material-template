import React from 'react';
import {ReactMeteorData} from 'meteor/react-meteor-data';

import AppBar from 'material-ui/lib/app-bar';
import {Login} from './Login.jsx';

export const Header = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
        return {
            currentUser: Meteor.user()
        };
    },

    handleLogout() {
        Meteor.logout();
    },

    render() {
        let loginButton;
        let { currentUser } = this.data;

        if (currentUser) {
            loginButton = (
                <li><a href="#" onClick={this.handleLogout}>Logout</a></li>
            )
        } else {
            loginButton = (
                <li><a href="/login">Login</a></li>
            )
        }

        return (
            <div>
                <AppBar title="My AppBar"/>
                {loginButton}
            </div>
        );
    }
});