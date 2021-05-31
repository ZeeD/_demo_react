import React, { Component } from 'react';
import { Link } from "react-router-dom";

import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import './MyPageTwo.scss';


class MyPageTwo extends Component {
    render() {
        return <>
            <MyHeader />
            <div className="page_two">
                <h1>Page two</h1>
                <p><Link to="/cnp/1">page one</Link></p>
            </div>
            <MyFooter />
        </>;
    }
}

export default MyPageTwo;
