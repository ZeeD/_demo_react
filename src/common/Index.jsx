import React from 'react';
import { Link } from "react-router-dom";

import PageComponent from './appstate/PageComponent';
import StateContext from './statecontext/StateContext';



export default class Index extends PageComponent {
    static contextType = StateContext

    render() {
        const lis = [];
        for (const href of [
            '/',
            '/locales',
            '/crosslinks/one', '/crosslinks/two',
            '/partial_state/section/one', '/partial_state/section/two',
            '/ctx'
        ])
            lis.push(<li key={href}><Link to={href}>{href}</Link></li>);

        const loading = this.appState.loading;
        const { loading2 } = this.context;

        return <>
            <pre>loading: `{`${loading}`}`</pre>
            <pre>loading2: `{`${loading2}`}`</pre>
            <ul>{lis}</ul>
        </>;
    }
}