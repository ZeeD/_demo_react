import React, { Component } from 'react';

import ContextConsumer1 from './ContextConsumer1';

export default class ContextSloth extends Component {
    render() {
        return <>
            <p>pre</p>
            <ContextConsumer1 />
            <p>post</p>
        </>;
    }
};
