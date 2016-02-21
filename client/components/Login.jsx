import React from 'react';

import TextField from 'material-ui/lib/TextField';
import RaisedButton from 'material-ui/lib/raised-button';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';

const paperStyle = {
    container: {
        width: 500,
        margin: '0 auto 0 auto'
    },

    inner: {
      padding: 15
    }
};

export class Login extends React.Component {

    onSubmit(event) {
        event.preventDefault();

        let self = this;
        let email = $(event.target).find('[name=email]').val();
        let password = $(event.target).find('[name=password]').val();

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
            <div style={paperStyle.container}>
                <Paper zDepth={2} style={paperStyle.inner}>
                    <h1>Login</h1>
                    <form onSubmit={this.onSubmit}>
                        <TextField name="email" type="text" floatingLabelText="Email" />
                        <Divider />
                        <TextField name="password" type="password" floatingLabelText="Password" />
                        <Divider />
                        <RaisedButton
                            type="submit"
                            label="Login"
                            primary={true}
                        />
                    </form>
                </Paper>
            </div>
        );
    }
};