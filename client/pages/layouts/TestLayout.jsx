import React from 'react';

export const TestLayout = ({content}) => (
    <div>
        {content}
    </div>
);

export class HelloReact extends React.Component {
    render(name) {
        return (
            <div>
                Hello, {this.props.name}.
            </div>
        );
    }
};
