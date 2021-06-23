import React from 'react';
import { Link } from "react-router-dom";

import PageComponent from './appstate/PageComponent';

export default class Index extends PageComponent {
    render() {
        const lis = [];
        for (const href of [
            '/',
            '/locales',
            '/crosslinks/one', '/crosslinks/two',
            '/partial_state/section/one', '/partial_state/section/two'
        ])
            lis.push(<li key={href}><Link to={href}>{href}</Link></li>);

        const loading = `${this.appState.loading}`;

        return <>
            <pre>loading: `{loading}`</pre>
            <ul>{lis}</ul>
        </>;
    }
}