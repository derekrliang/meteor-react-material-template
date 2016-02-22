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
                    <div className="parallax"><img style={styles.parallax} src="https://images.unsplash.com/photo-1444858345149-8ff40887589b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=1b5d1a032e0bc68e2bf514e1e348c138"/></div>
                </div>

                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <h1 className="header center orange-text">Starter Template</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                        </div>
                        <div className="row center">
                            <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light orange">Get Started</a>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="container row">
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center light-blue-text"><i className="material-icons">flash_on</i></h2>
                                <h5 className="center">Speeds up development</h5>

                                <p className="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center light-blue-text"><i className="material-icons">group</i></h2>
                                <h5 className="center">User Experience Focused</h5>

                                <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center light-blue-text"><i className="material-icons">settings</i></h2>
                                <h5 className="center">Easy to work with</h5>

                                <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="parallax-container">
                    <div className="parallax"><img style={styles.parallax} src="https://images.unsplash.com/photo-1439508472515-4899b144f04d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=27b9242e714225479603c1e469e419e9"/></div>
                </div>

                <div className="section white">
                    <div className="container row">
                        <h2 className="header">Parallax</h2>
                        <p className="grey-text text-darken-3 lighten-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur augue magna, finibus a rutrum ut, dignissim non augue. Sed quis auctor urna. Donec dolor tellus, malesuada ut viverra quis, euismod a nisl. Vivamus maximus tortor quis purus laoreet eleifend. Integer vel diam id metus pharetra laoreet non sit amet odio. Praesent pulvinar orci quam, nec scelerisque purus volutpat vitae. Suspendisse id justo dui. Donec tempor justo vel odio dapibus, sit amet fringilla ipsum euismod. Aenean tempor massa varius ultrices pharetra. Cras vestibulum mattis tempor. Donec tincidunt, elit et fringilla efficitur, ligula urna pulvinar felis, non accumsan felis enim eget nunc. Curabitur auctor massa tellus, eu tristique mi mollis sed. Donec ac faucibus tortor, id aliquam elit. Donec justo nulla, gravida at bibendum et, congue eget orci. Nunc volutpat nisl ut pharetra ornare.
                        </p>
                    </div>
                </div>

                <div className="container row">
                    <div className="col s12 m6">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="https://images.unsplash.com/photo-1428535172630-fb1c050ac3e0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=b12d8c2cf10fba49dbefbb5dc66c068c"/>
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

                <div className="parallax-container">
                    <div className="parallax"><img style={styles.parallax} src="https://images.unsplash.com/photo-1443890923422-7819ed4101c0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=a9c79afe3d7a158a876502b1cc548332"/></div>
                </div>
            </div>
        );
    }
};