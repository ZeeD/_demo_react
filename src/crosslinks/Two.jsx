import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Two.scss';


export default class Two extends Component {
    render() {
        if (!this.props.to) {
            console.error('no to!');
            return <></>;
        }

        return <div className="page_two">
            <h1>Page two</h1>
            <p><Link to={this.props.to}>page one</Link></p>
        </div>;
    }
};
