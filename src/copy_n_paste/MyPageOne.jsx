import React, { Component } from 'react';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import './MyPageOne.scss';


class MyPageOne extends Component {
    render() {
        return <>
            <MyHeader />
            <div className="page_one">
                <h1>Page one</h1>
                <p><a href="/cnp/2">page two</a></p>
            </div>
            <MyFooter />
        </>;
    }
}

export default MyPageOne;
