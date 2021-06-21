import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Index extends Component {
    render() {
        const lis = [];
        for (const href of [
            '/',
            '/locales',
            '/crosslinks/one', '/crosslinks/two',
            '/partial_state/section/one', '/partial_state/section/two'
        ])
            lis.push(<li key={href}><Link to={href}>{href}</Link></li>);

        return <ul>{lis}</ul>;
    }
}