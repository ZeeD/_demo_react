import { Component } from 'react';

export default class App extends Component {
    get appState() {
        return this.state.appState || {};
    }

    setAppState = newValue => {
        this.setState({ appState: { ...this.state.appState, ...newValue } });
    };
}
