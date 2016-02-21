import React from 'react';

import {Header} from '../../components/Header.jsx';
import {Footer} from '../../components/Footer.jsx';

export const MainLayout = React.createClass({
    render() {
        return (
            <div>
                <Header/>
                <main>
                    <div className="container">
                        {this.props.content}
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
});