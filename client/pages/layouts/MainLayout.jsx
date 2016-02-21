import React from 'react';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import AppTheme from '../../styles/theme.js';

import {Header} from '../../components/Header.jsx';
import {Footer} from '../../components/Footer.jsx';

export const MainLayout = React.createClass({
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
                <Header/>
                {this.props.content}
                <Footer/>
            </div>
        );
    }
});