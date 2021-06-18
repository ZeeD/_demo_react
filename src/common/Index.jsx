import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Index extends Component {
    render() {
        const lis = [];
        for (const href of [
            '/',
            '/locales',
            '/crosslinks/one', '/crosslinks/two',
            '/partial_state/section'
        ])
            lis.push(<li key={href}><Link to={href}>{href}</Link></li>);


        for (const [href, counter] of [
            ['/partial_state/section', 1],
            ['/partial_state/section', 2],
            ['/partial_state/section', 3]
        ])
            lis.push(<li key={href + "_" + counter}><Link to={{
                pathname: href,
                state: { counter }
            }}>{href} (with state = {counter})</Link></li>);

        return <ul>{lis}</ul>;
    }
}