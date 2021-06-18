import React, { Component } from 'react';

class MyContainer extends Component {
    render() {
        const pre = <span>PRE PRE PRE</span>;
        const post = <span>POST POST POST</span>;

        const ret = <>
            {pre}<br />
            {this.props.middle}<br />
            {post}
        </>;
        return ret;
    }
}

export default MyContainer;
