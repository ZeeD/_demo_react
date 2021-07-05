import React, { Component } from 'react';
import { t, addLocale, useLocale } from 'ttag';

import StateContext from '../common/statecontext/StateContext';

import en_po_json from './en.po.json';
import it_po_json from './it.po.json';
import example_json from './example.json';

export default class Locales extends Component {
    static contextType = StateContext

    componentDidMount() {
        const { localesLoaded } = this.context.state;
        const { setState } = this.context;

        if (!localesLoaded)
            for (const [localeName, localeUrl] of [['en', en_po_json],
            ['it', it_po_json],
            ['example', example_json]])
                addLocale(localeName, localeUrl);

        setState({ localesLoaded: true });
    }

    render() {
        const { currentLocale } = this.context.state;
        useLocale(currentLocale || 'it');

        const orig = 'Titolo, personaggio, genere..';
        const localized = t`Titolo, personaggio, genere..`;

        return <>
            <p>orig: {orig}</p>
            <p>localized: {localized}</p>
        </>;
    }
}
