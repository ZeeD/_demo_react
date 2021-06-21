import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from '../common/Footer';
import Header from '../common/Header';
import Index from '../common/Index';
import EmbedImages from '../embed_images/EmbedImages';
import Locales from '../locales/Locales';
import One from '../crosslinks/One';
import Two from '../crosslinks/Two';
import Section from '../partial_state/Section';

export default class App extends Component {
    render() {
        return <>
            <BrowserRouter>
                <Header />
                <Index />
                <Switch>
                    <Route exact path="/"><EmbedImages /></Route>
                    <Route exact path="/locales"><Locales /></Route>
                    <Route exact path="/crosslinks/one"><One to="/crosslinks/two" /></Route>
                    <Route exact path="/crosslinks/two"><Two to="/crosslinks/one" /></Route>
                    <Route exact path="/partial_state/section"><Section /></Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </>;
    }
};
