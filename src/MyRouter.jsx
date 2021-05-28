import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MyComponentFoo from './MyComponentFoo';
import MyComponentBar from './MyComponentBar';
import MyContainer from './MyContainer';
import MyComponentWithEmbedPng from './MyComponentWithEmbedPng';


class Index extends Component {
    render() {
        const lis = [];
        for (const href of ['/foo', '/bar', '/embed']) {
            const li = <li><a href={href}>{href}</a></li>
            lis.push(li);
        }
        const ul = <ul>{lis}</ul>;
        return ul;
    }
}


class MyRouter extends Component {
    render() {
        const ret = <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/foo" render={(props) => <MyContainer middle={<MyComponentFoo />} {...props} />} />
                <Route exact path="/bar" render={(props) => <MyContainer middle={<MyComponentBar />} {...props} />} />
                <Route exact path="/embed" component={MyComponentWithEmbedPng} />
            </Switch>
        </BrowserRouter>;

        return ret;
    }
}

export default MyRouter;
