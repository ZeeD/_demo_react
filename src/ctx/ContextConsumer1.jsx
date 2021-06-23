import React, { Component } from 'react';

import Ctx from './Ctx';

export default class ContextConsumer1 extends Component {
    static contextType = Ctx

    render() {
        const { value } = this.context;

        return <>
            <p>consumer uno - {JSON.stringify(value)}</p>
        </>;
    }
};
