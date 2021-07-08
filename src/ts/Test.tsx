import React, { Component } from 'react';


export default class Section extends Component {
    state = {
        hello: 'hello world'
    }

    componentDidMount() {
        this.setState({ state: 'mounted' });
    }

    componentWillUnmount() {
        this.setState({ state: 'unmounted' });
    }

    render() {
        return <h1>{this.state.hello}</h1>;
    }
}
