import React, { Component } from 'react';


export default class Section extends Component {
    state = {
        counter: 13
    }

    constructor(props) {
        super(props);
        console.info('constructor', JSON.stringify(this.props, null, 4), new Date());
    }

    componentDidMount() {
        console.info('componentDidMount', JSON.stringify(this.props, null, 4), new Date());
        this.setState(this.props.location.state);
    }

    componentWillUnmount() {
        console.info('componentWillUnmount', JSON.stringify(this.props, null, 4), new Date());
    }

    render() {
        return <>
            <p>{this.state.counter}</p>
            <button onClick={() => {
                this.setState({
                    counter: this.state.counter + 1
                });
            }}>clickme</button>
        </>;
    }
};
