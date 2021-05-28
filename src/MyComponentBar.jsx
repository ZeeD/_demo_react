import React, { Component } from 'react';


class MyComponentBar extends Component {
    render() {
        const span = <span>I am component bar!</span>
        const link = <a href="/foo">click</a>
        const ret = <>
            {span}<br />
            {link}
        </>;
        return ret;
    }
}

export default MyComponentBar;
