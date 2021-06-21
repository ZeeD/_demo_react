import React, { Component } from 'react';
import { equals } from '../common/utils';


export default class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        return this.componentDidMountOrUpdateProps();
    }

    componentDidUpdate(oldProps) {
        if (!equals(oldProps, this.props))
            return this.componentDidUpdateProps();
    }

    componentDidUpdateProps() {
        return this.componentDidMountOrUpdateProps();
    }

    componentDidMountOrUpdateProps() {
        if (this.state[this.props.match.params.id])
            return;

        fetch(`/partial_state_${this.props.match.params.id}.json`)
            .then(response => response.json())
            .then(value => this.setState({
                [this.props.match.params.id]: value
            }));
    }

    render() {
        return <dl>
            <dt>id</dt>
            <dd>{this.props.match.params.id}</dd>
            <dt>payload</dt>
            <dd>{JSON.stringify(this.state[this.props.match.params.id])}</dd>
            <dt>state</dt>
            <dd>{JSON.stringify(this.state)}</dd>
        </dl>;
    }
};
