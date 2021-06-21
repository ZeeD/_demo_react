import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Index extends Component {
    render() {
        const lis = [];
        for (const href of [
            '/',
            '/locales',
            '/crosslinks/one', '/crosslinks/two',
            '/partial_state/section/0'
        ])
            lis.push(<li key={href}><Link to={href}>{href}</Link></li>);


        for (const [href, counter] of [
            ['/partial_state/section/123', 1],
            ['/partial_state/section/456', 2],
            ['/partial_state/section/789', 3]
        ])
            lis.push(<li key={href + "_" + counter}><Link to={{
                pathname: href,
                state: { counter }
            }}>{href} (with state = {counter})</Link></li>);

        return <ul>{lis}</ul>;
    }
}