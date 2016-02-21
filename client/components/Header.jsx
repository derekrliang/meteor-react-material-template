import React from 'react';
import {ReactMeteorData} from 'meteor/react-meteor-data';

import {Login} from './Auth.jsx';

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

        // Display login and register buttons if not signed in
        let loginButton, registerButton;
        let { currentUser } = this.data;

        if (currentUser) {
            loginButton = (
                <li><a href="#" onClick={this.handleLogout}>Logout</a></li>
            );
        } else {
            loginButton = (
                <li><a href="/login">Login</a></li>

            );
            registerButton = (
                <li><a href="/register">Register</a></li>
            );
        }

        return (
            <header>
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">Logo</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                            {loginButton}
                            {registerButton}
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
});