import React from 'react';
import {Header} from '../../components/Header.jsx';

import RaisedButton from 'material-ui/lib/raised-button';
import AppBar from 'material-ui/lib/app-bar';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import AppTheme from '../../styles/theme.js';

export const MainLayout = ({content}) => (
    <div>
        <Header/>
        <RaisedButton label="Default"/>
        {content}
    </div>
);

export const MainLayoutTwo = React.createClass({
    //the key passed through context must be called "muiTheme"
    childContextTypes: {
        muiTheme: React.PropTypes.object,
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(AppTheme),
        };
    },

    //the app bar and button will receive our theme through
    //context and style accordingly
    render() {
        return (
            <div>
                <AppBar title="My AppBar" />
                <RaisedButton label="My Button" primary={true} />
                {this.props.content}
            </div>
        );
    }
});