import React, { Component } from 'react';
import './MyPageOne.scss';


class MyPageOne extends Component {
    render() {
        return <div className="page_one">
            <h1>Page one</h1>
            <p><a href="/gc/2">page two</a></p>
        </div>;
    }
}

export default MyPageOne;
