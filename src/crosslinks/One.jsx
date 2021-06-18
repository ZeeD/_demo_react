import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './One.scss';


export default class One extends Component {
    render() {
        if (!this.props.to) {
            console.error('no to!');
            return <></>;
        }

        return <div className="page_one">
            <h1>Page one</h1>
            <p><Link to={this.props.to}>page two</Link></p>
        </div>;
    }
};
