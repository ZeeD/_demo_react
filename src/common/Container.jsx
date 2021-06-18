import React, { Component } from 'react';

import Footer from '../common/Footer';
import Header from '../common/Header';
import Index from '../common/Index';

export default class Container extends Component {
    render() {
        if (!this.props.mainBody) {
            console.error('no mainBody!');
            return <></>;
        }

        return <>
            <Header />
            <Index />
            {this.props.mainBody}
            <Footer />
        </>;
    }

    static wraps(Comp, orig_props) {
        return new_props => {
            const props = { ...orig_props, ...new_props };
            return <Container mainBody={<Comp {...props} />} />;
        };
    };
};
