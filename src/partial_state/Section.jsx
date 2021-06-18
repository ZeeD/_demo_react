import React, { Component } from 'react';


export default class Section extends Component {
    state = {
        counter: 13
    }

    componentDidMount() {
        this.setState(this.props.location.state);
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
