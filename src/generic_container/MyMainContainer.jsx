import React, { Component } from 'react';

import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

class MyMainContainer extends Component {
    render() {
        return <>
            <MyHeader />
            {this.props.mainBody}
            <MyFooter />
        </>;
    }
}

export default MyMainContainer;
