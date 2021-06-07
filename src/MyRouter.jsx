import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import MyComponentFoo from './MyComponentFoo';
import MyComponentBar from './MyComponentBar';
import MyContainer from './MyContainer';
import MyComponentWithEmbedPng from './MyComponentWithEmbedPng';
import MyPageOneCP from './copy_n_paste/MyPageOne';
import MyPageTwoCP from './copy_n_paste/MyPageTwo';
import MyMainContainerGC from './generic_container/MyMainContainer';
import MyPageOneGC from './generic_container/MyPageOne';
import MyPageTwoGC from './generic_container/MyPageTwo';
import MyLocaledComponent from './localetest/MyLocaledComponent';

class Index extends Component {
    render() {
        const lis = [];
        for (const href of ['/foo', '/bar', '/embed', '/cnp/1', '/cnp/2', '/gc/1', '/gc/2', '/localized']) {
            const li = <li key={href}><Link to={href}>{href}</Link></li>
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
                <Route exact path="/foo" render={(props) => <MyContainer middle={<MyComponentFoo {...props} />} {...props} />} />
                <Route exact path="/bar" render={(props) => <MyContainer middle={<MyComponentBar {...props} />} {...props} />} />
                <Route exact path="/embed" component={MyComponentWithEmbedPng} />
                <Route exact path="/cnp/1" component={MyPageOneCP} />
                <Route exact path="/cnp/2" component={MyPageTwoCP} />
                <Route exact path="/gc/1" render={(props) => <MyMainContainerGC mainBody={<MyPageOneGC {...props} />} {...props} />} />
                <Route exact path="/gc/2" render={(props) => <MyMainContainerGC mainBody={<MyPageTwoGC {...props} />} {...props} />} />
                <Route exact path="/localized" component={MyLocaledComponent} />
            </Switch>
        </BrowserRouter>;

        return ret;
    }
}

export default MyRouter;
