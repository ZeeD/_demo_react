import React, { Component } from 'react';

import Ctx from './Ctx';
import ContextSloth from './ContextSloth';
import ContextConsumer2 from './ContextConsumer2';

export default class ContextProvider extends Component {
    state = {
        contextValue: 'default'
    }

    render() {
        return <Ctx.Provider value={{
            value: this.state.contextValue,
            setValue: contextValue => this.setState({ contextValue })
        }}>
            <ContextSloth />
            <ContextConsumer2 />
        </Ctx.Provider>
    }
};
