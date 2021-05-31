import React, { Component } from 'react';

import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

class MyMainContainer extends Component {
    constructor(props) {
        super(props)

        this.mainBody = props.mainBody;
    }

    render() {
        return <>
            <MyHeader />
            {this.mainBody}
            <MyFooter />
        </>;
    }
}

export default MyMainContainer;
