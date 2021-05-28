import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyComponentFoo from './MyComponentFoo';
import MyComponentBar from './MyComponentBar';


class MyRouter extends Component {
    render() {
        const ret = <BrowserRouter>
            <Switch>
                <Route exact path="/foo" component={MyComponentFoo} />
                <Route exact path="/bar" component={MyComponentBar} />
            </Switch>
        </BrowserRouter>;

        return ret;
    }
}

export default MyRouter;
