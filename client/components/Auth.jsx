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
        })
    }

    render() {
        return (
            <div className="row">
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
        let email = $(event.target).find('#email').val();
        let password = $(event.target).find('#password').val();
        let firstname = $(event.target).find('#first_name').val();
        let lastname = $(event.target).find('#last_name').val();

        Meteor.loginWithPassword(email, password, function(error) {
            if (error) {
                console.log(error.reason);
            } else {
                FlowRouter.go('home');
            }
        })
    }

    render() {
        return (
            <div className="row">
                <form className="card col m6 s12" onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="first_name" type="text" className="validate"/>
                            <label htmlFor="first_name">First Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="last_name" type="text" className="validate"/>
                            <label htmlFor="last_name">Last Name</label>
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