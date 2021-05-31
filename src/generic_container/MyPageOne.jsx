import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './MyPageOne.scss';


class MyPageOne extends Component {
    render() {
        return <div className="page_one">
            <h1>Page one</h1>
            <p><Link to="/gc/2">page two</Link></p>
        </div>;
    }
}

export default MyPageOne;
