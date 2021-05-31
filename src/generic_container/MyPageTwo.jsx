import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './MyPageTwo.scss';


class MyPageTwo extends Component {
    render() {
        return <div className="page_two">
            <h1>Page two</h1>
            <p><Link to="/gc/1">page one</Link></p>
        </div>;
    }
}

export default MyPageTwo;
