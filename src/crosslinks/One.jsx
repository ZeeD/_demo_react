import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import './One.scss';


export default class One extends Component {
    static propTypes = {
        to: PropTypes.string
    };

    render() {
        return <div className="page_one">
            <h1>Page one</h1>
            <p><Link to={this.props.to}>page two</Link></p>
        </div>;
    }
};
