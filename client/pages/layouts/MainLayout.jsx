import React from 'react';

import {Header} from '../../components/Header.jsx';
import {Footer} from '../../components/Footer.jsx';

export const MainLayout = React.createClass({
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    {this.props.content}
                </div>
                <Footer/>
            </div>
        );
    }
});