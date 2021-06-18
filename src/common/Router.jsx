import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Container from './Container';
import EmbedImages from '../embed_images/EmbedImages';
import Locales from '../locales/Locales';
import One from '../crosslinks/One';
import Two from '../crosslinks/Two';

export default class Router extends Component {
    render() {
        const ret = <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Container.wraps(EmbedImages)} />
                <Route exact path="/locales" component={Container.wraps(Locales)} />
                <Route exact path="/crosslinks/one" component={Container.wraps(One, { to: '/crosslinks/two' })} />
                <Route exact path="/crosslinks/two" component={Container.wraps(Two, { to: '/crosslinks/one' })} />
            </Switch>
        </BrowserRouter>;

        return ret;
    }
};
