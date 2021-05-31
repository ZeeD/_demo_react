import React, { Component } from 'react';
import './MyPageTwo.scss';


class MyPageTwo extends Component {
    render() {
        return <div className="page_two">
            <h1>Page two</h1>
            <p><a href="/gc/1">page one</a></p>
        </div>;
    }
}

export default MyPageTwo;
