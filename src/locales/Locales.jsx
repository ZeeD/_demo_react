import React, { Component } from 'react';
import { t, addLocale, useLocale } from 'ttag';

const en_po_json = require('./en.po.json');
const it_po_json = require('./it.po.json');
const example_json = require('./example.json');

export default class Locales extends Component {
    render() {
        addLocale('en', en_po_json);
        addLocale('it', it_po_json);
        addLocale('example', example_json)
        useLocale('it');

        const orig = 'Titolo, personaggio, genere..';
        const localized = t`Titolo, personaggio, genere..`;

        return <>
            <p>orig: {orig}</p>
            <p>localized: {localized}</p>
        </>;
    }
}
