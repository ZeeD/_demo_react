import React, { Component } from 'react';

class MyContainer extends Component {
    constructor(props) {
        super(props)

        this.middle = props.middle;
    }

    render() {
        const pre = <span>PRE PRE PRE</span>;
        const post = <span>POST POST POST</span>;

        const ret = <>
            {pre}<br />
            {this.middle}<br />
            {post}
        </>;
        return ret;
    }
}

export default MyContainer;
