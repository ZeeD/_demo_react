import { Component } from 'react';
import PropTypes from 'prop-types';

import { equals } from '../common/utils';

export default class PageComponent extends Component {
    static propTypes = {
        appState: PropTypes.object.isRequired,
        setAppState: PropTypes.func.isRequired
    };

    get appState() {
        return this.props.appState
    }

    setAppState(appState) {
        return new Promise(resolve => this.props.setAppState(appState, resolve));
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
        /* pass */
    };
};

