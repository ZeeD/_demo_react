import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Index extends Component {
    render() {
        const lis = [];
        for (const href of [
            '/',
            '/locales',
            '/crosslinks/one', '/crosslinks/two'
        ]) {
            const li = <li key={href}><Link to={href}>{href}</Link></li>
            lis.push(li);
        }
        const ul = <ul>{lis}</ul>;
        return ul;
    }
}