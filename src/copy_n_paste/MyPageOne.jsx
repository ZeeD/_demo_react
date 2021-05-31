import React, { Component } from 'react';
import { Link } from "react-router-dom";

import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import './MyPageOne.scss';


class MyPageOne extends Component {
    render() {
        return <>
            <MyHeader />
            <div className="page_one">
                <h1>Page one</h1>
                <p><Link to="/cnp/2">page two</Link></p>
            </div>
            <MyFooter />
        </>;
    }
}

export default MyPageOne;
