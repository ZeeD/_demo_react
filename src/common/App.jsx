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
    constructor(props) {
        super(props);
        this.state = {
            appState: {}
        }
    }

    setAppState = newValue => {
        this.setState({ appState: { ...this.state.appState, ...newValue } });
    };

    render() {
        return <>
            <BrowserRouter>
                <Header />
                <Index appState={this.state.appState}
                    setAppState={this.setAppState} />
                <Switch>
                    <Route exact path="/"
                        render={props => <EmbedImages {...props} />} />
                    <Route exact path="/locales"
                        render={props => <Locales {...props} />} />
                    <Route exact path="/crosslinks/one"
                        render={props => <One to="/crosslinks/two" {...props} />} />
                    <Route exact path="/crosslinks/two"
                        render={props => <Two to="/crosslinks/one" {...props} />} />
                    <Route exact path="/partial_state/section/:id"
                        render={props => <Section {...props}
                            appState={this.state.appState}
                            setAppState={this.setAppState} />} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </>;
    }
};
