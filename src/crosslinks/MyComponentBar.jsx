import React, { Component } from 'react';
import { Link } from "react-router-dom";


class MyComponentBar extends Component {
    render() {
        const span = <span>I am component bar!</span>
        const link = <Link to="/foo">click</Link>
        const ret = <>
            {span}<br />
            {link}
        </>;
        return ret;
    }
}

export default MyComponentBar;
