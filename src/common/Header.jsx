import React, { Component } from 'react';

import StateContext from './statecontext/StateContext';

import './Header.scss';

export default class MyHeader extends Component {
    static contextType = StateContext

    render() {
        const { loading } = this.context.state;

        return <div className="header">
            <span>Header</span>
            <span>loading: {loading}</span>
        </div>;
    }
};
