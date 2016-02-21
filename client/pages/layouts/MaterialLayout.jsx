import React from 'react';


export const MaterialLayout = React.createClass({

    getInitialState() {
        return {
          open: false
        };
    },

    handleRequestClose() {
        this.setState({
            open: false
        });
    },

    handleTouchTap() {
        this.setState({
            open: true
        });
    },

    render() {
        return (
            <div>temp</div>
        );
    }
});