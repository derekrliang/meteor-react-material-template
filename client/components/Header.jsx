import React from 'react';

import AppBar from 'material-ui/lib/app-bar';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <AppBar title="My AppBar" />
            </div>
        );
    }
};