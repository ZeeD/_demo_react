import React, { Component } from 'react';
import { addLocale, useLocale } from 'ttag';

import StateContext from '../common/statecontext/StateContext';

import en_po_json from './en.po.json';
import it_po_json from './it.po.json';
import example_json from './example.json';

export default class Locales extends Component {
    static contextType = StateContext

    componentDidMount() {
        const { localesLoaded, currentLocale } = this.context.state;
        const { setState } = this.context;

        if (!localesLoaded)
            for (const [localeName, localeUrl] of [['en', en_po_json],
            ['it', it_po_json],
            ['example', example_json]])
                addLocale(localeName, localeUrl);

        setState({
            localesLoaded: true,
            currentLocale: currentLocale || 'it'
        });
    }

    render() {
        const { setState } = this.context;
        const setLocale = currentLocale => {
            setState({ currentLocale }, _ => useLocale(currentLocale));
        };

        const buttons = [];
        for (const localeName of ['en', 'it', 'example']) {
            const button = (
                <button onClick={setLocale.bind(null, localeName)}
                        key={localeName}>
                    {localeName}
                </button>
            );
            buttons.unshift(button);
        }

        return <>
            {buttons}
        </>;
    }
}
