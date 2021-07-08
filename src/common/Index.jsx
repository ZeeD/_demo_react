import React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom";

import StateContext from './statecontext/StateContext';



export default class Index extends Component {
    static contextType = StateContext

    render() {
        const lis = [];
        for (const href of [
            '/',
            '/locales', '/locales/set',
            '/crosslinks/one', '/crosslinks/two',
            '/partial_state/section/one', '/partial_state/section/two',
            '/ctx',
            'ts'
        ])
            lis.push(<li key={href}><Link to={href}>{href}</Link></li>);

        const { loading } = this.context.state;

        return <>
            <pre>loading: `{`${loading}`}`</pre>
            <ul>{lis}</ul>
        </>;
    }
}