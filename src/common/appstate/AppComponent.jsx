import { Component } from 'react';

export default class AppComponent extends Component {
    get appState() {
        return (this.state || {}).appState || {};
    }

    setAppState = newValue => {
        this.setState({ appState: { ...(this.state || {}).appState, ...newValue } });
    };
}
