import React, { Component } from 'react';
import { Link } from "react-router-dom";


class MyComponentFoo extends Component {
    render() {
        const span = <span>I am component foo!</span>
        const link = <Link to="/bar">click</Link>
        const ret = <>
            {span}<br />
            {link}
        </>;
        return ret;
    }
}

export default MyComponentFoo;
