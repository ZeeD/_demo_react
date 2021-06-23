import React, { Component } from 'react';

import Ctx from './Ctx';

export default class ContextConsumer2 extends Component {
    static contextType = Ctx

    render() {
        const { value, setValue } = this.context;

        return <>
            <p>consumer due - {JSON.stringify(value)}</p>
            <button onClick={() => setValue('uno')}>set value uno</button>
            <button onClick={() => setValue('due')}>set value due</button>
        </>;
    }
};
