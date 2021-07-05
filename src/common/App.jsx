import React from 'react';
import { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import Footer from '../common/Footer';
import Header from '../common/Header';
import Index from '../common/Index';
import EmbedImages from '../embed_images/EmbedImages';
import Locales from '../locales/Locales';
import ChangeLocales from '../locales/ChangeLocales';
import One from '../crosslinks/One';
import Two from '../crosslinks/Two';
import Section from '../partial_state/Section';
import ContextProvider from '../ctx/ContextProvider';

import StateContext from './statecontext/StateContext';


export default class App extends Component {
    state = {
        loading: true
    };

    render() {
        return <>
            <StateContext.Provider value={StateContext.value(this)}>
                <BrowserRouter>
                    <Header />
                    <Index />
                    <Switch>
                        <Route exact path="/"><EmbedImages /></Route>
                        <Route exact path="/locales"
                            render={props => <Locales {...props} />} />
                        <Route exact path="/locales/set"
                            render={props => <ChangeLocales {...props} />} />
                        <Route exact path="/crosslinks/one">
                            <One to="/crosslinks/two" />
                        </Route>
                        <Route exact path="/crosslinks/two">
                            <Two to="/crosslinks/one" />
                        </Route>
                        <Route exact path="/partial_state/section/:id"
                            render={props => <Section {...props}
                                appState={this.appState}
                                setAppState={this.setAppState} />} />
                        <Route exact path="/ctx"
                            render={props => <ContextProvider {...props} />} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </StateContext.Provider>
        </>;
    }
};
