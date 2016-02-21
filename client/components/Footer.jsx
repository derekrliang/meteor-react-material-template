import React from 'react';

import FullWidthSection from './FullWidthSection.jsx';

export class Footer extends React.Component {
    render() {
        return (
            <FullWidthSection style={styles.footer}>
                <p style={prepareStyles(styles.p)}>
                    {'Hand crafted with love by the engineers at '}
                    <a style={styles.a} href="http://call-em-all.com">
                        Call-Em-All
                    </a>
                    {' and our awesome '}
                    <a
                        style={prepareStyles(styles.a)}
                        href="https://github.com/callemall/material-ui/graphs/contributors"
                    >
                        contributors
                    </a>.
                </p>
                <IconButton
                    iconStyle={styles.iconButton}
                    iconClassName="muidocs-icon-custom-github"
                    href="https://github.com/callemall/material-ui"
                    linkButton={true}
                />
            </FullWidthSection>
        );
    }
};