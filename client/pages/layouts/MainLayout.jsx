import React from 'react';

import {Header} from '../../components/Header.jsx';
import {Footer} from '../../components/Footer.jsx';

export const MainLayout = React.createClass({
    render() {
        return (
            <div id="react-app">
                <Header/>
                <main>
                    {this.props.content}
                </main>
                <Footer/>
            </div>
        );
    }
});