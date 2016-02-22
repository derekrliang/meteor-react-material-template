import React from 'react';

export class Login extends React.Component {
    onSubmit(event) {
        event.preventDefault();

        let self = this;
        let email = $(event.target).find('#email').val();
        let password = $(event.target).find('#password').val();

        Meteor.loginWithPassword(email, password, function(error) {
            if (error) {
                console.log(error.reason);
            } else {
                FlowRouter.go('home');
            }
        });
    }

    render() {
        return (
            <div className="row container">
                <form className="card col m6 s12" onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate"/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
};


export class Register extends React.Component {
    onSubmit(event) {
        event.preventDefault();

        let self = this;
        let username = $(event.target).find('#username').val();
        let email = $(event.target).find('#email').val();
        let password = $(event.target).find('#password').val();

        let options = { username, email, password };

        Accounts.createUser(options, function(error) {
            if (error) {
                console.log(error.reason);
            } else {
                Meteor.loginWithPassword(email, password, function(error) {
                    if (error) {
                        console.log(error.reason);
                    } else {
                        FlowRouter.go('home');
                    }
                });
            }
        });
    }

    render() {
        return (
            <div className="row container">
                <form className="card col m6 s12" onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="username" type="text" className="validate"/>
                            <label htmlFor="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate"/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
};