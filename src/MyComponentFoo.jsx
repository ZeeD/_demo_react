import React, { Component } from 'react';

class MyComponentFoo extends Component {
    render() {
        const span = <span>I am component foo!</span>
        const link = <a href="/bar">click</a>
        const ret = <>
            {span}<br />
            {link}
        </>;
        return ret;
    }
}

export default MyComponentFoo;
