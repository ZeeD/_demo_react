import React, { Component } from 'react';

import ImageSrc from './bitmap.png';
import { ReactComponent as SvgEmbed } from './disegno.svg';
import SvgSrc from './disegno.svg';

export default class EmbedImages extends Component {
    render() {
        return <dl>
            <dt>png:</dt>
            <dd><img src={ImageSrc} alt="img src" /></dd>
            <dt>svg (embed):</dt>
            <dd><SvgEmbed /></dd>
            <dt>svg (link):</dt>
            <dd><img src={SvgSrc} alt="svg src" /></dd>
        </dl>;
    }
}
