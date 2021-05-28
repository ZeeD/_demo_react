import React, { Component } from 'react';

import Bitmap from './bitmap.png';
import { ReactComponent as Disegno } from './disegno.svg';

class MyComponentWithEmbedPng extends Component {
    render() {
        const myPng = <img src={Bitmap} alt="png" />
        const mySvgIsAComponent = <Disegno />

        const ret = <>
            {myPng}<br />
            {mySvgIsAComponent}
        </>;
        return ret;
    }
}

export default MyComponentWithEmbedPng;
