import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyComponentFoo from './MyComponentFoo';
import MyComponentBar from './MyComponentBar';
import MyContainer from './MyContainer';


class MyRouter extends Component {
    render() {
        const ret = <BrowserRouter>
            <Switch>
                <Route exact path="/foo" render={(props) => <MyContainer middle={<MyComponentFoo />} {...props} />} />
                <Route exact path="/bar" render={(props) => <MyContainer middle={<MyComponentBar />} {...props} />} />
            </Switch>
        </BrowserRouter>;

        return ret;
    }
}

export default MyRouter;
