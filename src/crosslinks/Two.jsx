import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import './Two.scss';


export default class Two extends Component {
    static propTypes = {
        to: PropTypes.string
    };

    render() {
        return <div className="page_two">
            <h1>Page two</h1>
            <p><Link to={this.props.to}>page one</Link></p>
        </div>;
    }
};
