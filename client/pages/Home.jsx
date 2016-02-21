import React from 'react';

export class Home extends React.Component {

    componentDidMount() {
        // Initialize after rendering React component,
        // in this case, initialize the parallax components.
        $('.parallax').parallax();
    }

    render() {

        let styles = {
            parallax: {
                width: '50%'
            }
        };

        return (
            <div>
                <div className="parallax-container">
                    <div className="parallax"><img style={styles.parallax} src="images/photo-1451417379553-15d8e8f49cde.jpeg"/></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator" src="images/office.jpg"/>
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                                    <p><a href="#">This is a link</a></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};