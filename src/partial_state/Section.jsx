import React, { Component } from 'react';
import sleep from 'sleep-promise';
import { withStyles } from '@material-ui/core/styles';

import { equals } from '../common/utils';


const styles = {
    dlLoading: {
        background: 'red',
    },
    dl: {
        background: 'green'
    }
};


export default withStyles(styles)(class Section extends Component {
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

        this.setState({
            loading: true
        }, () => sleep(2000)
            .then(() => fetch(`/partial_state_${this.props.match.params.id}.json`)
                .then(response => response.json())
                .then(value => this.setState({
                    [this.props.match.params.id]: value
                })))
            .then(() => this.setState({
                loading: false
            })));
    }

    render() {
        const { classes } = this.props;

        const dlClassName = this.state.loading ? classes.dlLoading : classes.dl;

        return <dl className={dlClassName}>
            <dt>id</dt>
            <dd>{this.props.match.params.id}</dd>
            <dt>payload</dt>
            <dd>{JSON.stringify(this.state[this.props.match.params.id])}</dd>
            <dt>state</dt>
            <dd>{JSON.stringify(this.state)}</dd>
        </dl>;
    }
});
