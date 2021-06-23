import React from 'react';
import sleep from 'sleep-promise';
import { withStyles } from '@material-ui/core/styles';

import PageComponent from '../common/appstate/PageComponent';
import StateContext from '../common/statecontext/StateContext';

const styles = {
    dlLoading: {
        background: 'red',
    },
    dl: {
        background: 'green'
    }
};


export default withStyles(styles)(class Section extends PageComponent {
    static contextType = StateContext

    componentWillUnmount() {
        const { setLoading2 } = this.context;

        setLoading2(false);
    }

    componentDidMountOrUpdateProps() {
        super.componentDidMountOrUpdateProps();

        const { loading2, setLoading2 } = this.context;


        if (this.appState[this.props.match.params.id])
            return;

        if (!loading2)
            setLoading2(true);

        sleep(2000)
            .then(() => fetch(`/partial_state_${this.props.match.params.id}.json`))
            .then(response => response.json())
            .then(value => {
                setLoading2(false);

                this.setAppState({
                    [this.props.match.params.id]: value
                })
            });
    }

    render() {
        const { classes } = this.props;
        const { loading2 } = this.context;

        const dlClassName = loading2 ? classes.dlLoading : classes.dl;

        return <dl className={dlClassName}>
            < dt > id</dt >
            <dd>{this.props.match.params.id}</dd>
            <dt>payload</dt>
            <dd>{JSON.stringify(this.appState[this.props.match.params.id])}</dd>
            <dt>state</dt>
            <dd>{JSON.stringify(this.appState)}</dd>
        </dl >;
    }
});
