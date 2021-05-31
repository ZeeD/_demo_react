import React, { Component } from 'react';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import './MyPageTwo.scss';


class MyPageTwo extends Component {
    render() {
        return <>
            <MyHeader />
            <div className="page_two">
                <h1>Page two</h1>
                <p><a href="/cnp/1">page one</a></p>
            </div>
            <MyFooter />
        </>;
    }
}

export default MyPageTwo;
