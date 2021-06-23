import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from '../common/Footer';
import Header from '../common/Header';
import Index from '../common/Index';
import EmbedImages from '../embed_images/EmbedImages';
import Locales from '../locales/Locales';
import One from '../crosslinks/One';
import Two from '../crosslinks/Two';
import Section from '../partial_state/Section';

import AppComponente from './appstate/AppComponent';


export default class App extends AppComponente {
    render() {
        return <>
            <BrowserRouter>
                <Header />
                <Index {...this.props}
                    appState={this.appState}
                    setAppState={this.setAppState} />
                <Switch>
                    <Route exact path="/"
                        render={props => <EmbedImages {...props} />} />
                    <Route exact path="/locales"
                        render={props => <Locales {...props} />} />
                    <Route exact path="/crosslinks/one"
                        render={props => <One to="/crosslinks/two" {...props} />} />
                    <Route exact path="/crosslinks/two">
                        <Two to="/crosslinks/one" {...props} />
                    </Route>
                    <Route exact path="/partial_state/section/:id">
                        <Section {...this.props}
                            appState={this.appState}
                            setAppState={this.setAppState} />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </>;
    }
};
