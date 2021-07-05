import React from 'react';
import { Component } from 'react';
import sleep from 'sleep-promise';
import { withStyles } from '@material-ui/core/styles';

import StateContext from '../common/statecontext/StateContext';

const styles = {
    dlLoading: {
        background: 'red',
    },
    dl: {
        background: 'green'
    }
};


export default withStyles(styles)(class Section extends Component {
    static contextType = StateContext

    constructor(props) {
        super(props);
        props.history.listen((location, action) => {
            // location is an object like window.location
            console.log(action, location.pathname, location.state)
        });
    }

    componentWillUnmount() {
        const { setState } = this.context;

        setState({ loading: false });
    }

    componentDidMount() {
        const { state, setState } = this.context;

        if (state[this.props.match.params.id])
            return;

        setState({ loading: true },
                 () => sleep(2000)
                    .then(() => fetch(`/partial_state_${this.props.match.params.id}.json`))
                    .then(response => response.json())
                    .then(value => setState({
                        loading: false,
                        [this.props.match.params.id]: value
                    })));
    }

    render() {
        const { classes } = this.props;
        const { state } = this.context;

        const dlClassName = state.loading ? classes.dlLoading : classes.dl;

        return <dl className={dlClassName}>
            < dt > id</dt >
            <dd>{this.props.match.params.id}</dd>
            <dt>payload</dt>
            <dd>{JSON.stringify(state[this.props.match.params.id])}</dd>
            <dt>state</dt>
            <dd>{JSON.stringify(state)}</dd>
        </dl >;
    }
});
