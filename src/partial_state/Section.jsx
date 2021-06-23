import React from 'react';
import sleep from 'sleep-promise';
import { withStyles } from '@material-ui/core/styles';

import PageComponent from '../common/appstate/PageComponent';

const styles = {
    dlLoading: {
        background: 'red',
    },
    dl: {
        background: 'green'
    }
};


export default withStyles(styles)(class Section extends PageComponent {
    componentWillUnmount() {
        this.setAppState({ loading: false })
    }

    componentDidMountOrUpdateProps() {
        super.componentDidMountOrUpdateProps();

        if (this.appState[this.props.match.params.id])
            return;

        const then = () => sleep(2000)
            .then(() => fetch(`/partial_state_${this.props.match.params.id}.json`))
            .then(response => response.json())
            .then(value => this.setAppState({
                [this.props.match.params.id]: value,
                loading: false
            }));


        if (!this.appState.loading)
            this.setAppState({ loading: true })
                .then(then);
        else
            then();
    }

    render() {
        const { classes } = this.props;

        const dlClassName = this.appState.loading ? classes.dlLoading : classes.dl;

        return <dl className={dlClassName}>
            <dt>id</dt>
            <dd>{this.props.match.params.id}</dd>
            <dt>payload</dt>
            <dd>{JSON.stringify(this.appState[this.props.match.params.id])}</dd>
            <dt>state</dt>
            <dd>{JSON.stringify(this.appState)}</dd>
        </dl>;
    }
});
